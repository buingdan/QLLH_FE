import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { UserService } from '../../Service/UserService/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: any[] = [];
  ingredient!: string;
  totalRecords: number = 0;
  currentPage: number = 1;
  limit: number = 5;
  visible: boolean = false;
  visible1: boolean = false;
  user = {
    id: 0,
    fullName: '',
    age: 0,
    gender: false,
    phoneNumber: '',
    address: '',
    email: '',
    role: '',
  };
  userSearch = {
    nameSearch: '',
    phoneNumber: '',
    addressSearch: '',
    roleSearch: '',
    genderSearch: [true, false],
  };
  roles = [
    { name: 'Admin', code: 'Admin' },
    { name: 'Bệnh nhân', code: 'Bệnh nhân' },
    { name: 'Bác sĩ', code: 'Bác sĩ' },
  ];
  formGroup: FormGroup | undefined;

  onDeleteUser(user: any) {
    console.log(user);
    this.userService.deleteUser(user.id);
    this.loadUsersNew();
  }
  textSearch: string = '';
  phoneSearch: string = '';
  addressSearch: string = '';
  selectedRole: string = '';

  role: SelectItem[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'Bác sĩ', value: 'bác sĩ' },
    { label: 'Bệnh nhân', value: 'bệnh nhân' },
  ];
  selectedGender: boolean | null = null; // Quản lý trạng thái của radio button

  onGenderChange(selectedGender: boolean) {
    this.selectedGender = selectedGender;
    this.userSearch.genderSearch = [selectedGender];
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsersNew();
    this.formGroup = new FormGroup({
      selectedGender: new FormControl<any | null>(null),
    });
  }
  onFilterNew() {
    this.loadUsersNew();
    this.userSearch = {
      nameSearch: '',
      phoneNumber: '',
      addressSearch: '',
      roleSearch: '',
      genderSearch: [true, false],
    };
  }

  // loadUsers() {
  //   // const combinedSearch = `${this.textSearch} ${this.phoneSearch} ${this.addressSearch}`;
  //   const sortData = 'fullName';
  //   const sortType = 'asc';

  //   this.userService
  //     // .getUsers(combinedSearch.trim(), sortData, sortType, this.currentPage, this.limit)
  //     .getUsers(
  //       this.textSearch,
  //       sortData,
  //       sortType,
  //       this.currentPage,
  //       this.limit
  //     )
  //     .subscribe((response) => {
  //       this.users = response.list;
  //       this.totalRecords = response.totalRecord;
  //     });
  // }

  loadUsersNew() {
    const sortData = 'fullName';
    const sortType = 'asc';

    this.userService
      .getUsersNew(
        this.userSearch.nameSearch,
        this.userSearch.phoneNumber,
        this.userSearch.addressSearch,
        this.userSearch.roleSearch,
        this.userSearch.genderSearch,
        sortData,
        sortType,
        this.currentPage,
        this.limit
      )
      .subscribe((response) => {
        this.users = response.list;
        this.totalRecords = response.totalRecord;
      });
  }

  onFilter() {
    this.currentPage = 1;
    this.loadUsersNew();
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.limit = event.rows;
    this.loadUsersNew();
  }

  onRoleChange(event: any) {
    console.log(event);
    this.userSearch.roleSearch = event.value.code;
  }

  showDialogEdit(user: any) {
    this.visible1 = true;
    console.log(user);
    this.user = {
      id: user.id,
      fullName: user.fullName,
      age: user.age,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      address: user.address,
      email: user.email,
      role: user.role,
    };
  }
  showDialogAdd() {
    this.visible = true;
  }
  onSubmit() {
    console.log(this.user);

    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully', response);
        this.user = {
          id: 0,
          fullName: '',
          age: 0,
          gender: false,
          phoneNumber: '',
          address: '',
          email: '',
          role: '',
        };
        this.visible = false;
        this.loadUsersNew();
      },
      (error) => {
        console.error('Error adding user', error);
        this.user = {
          id: 0,
          fullName: '',
          age: 0,
          gender: false,
          phoneNumber: '',
          address: '',
          email: '',
          role: '',
        };
        this.visible = false;
        this.loadUsersNew();
      }
    );
  }
  onCancelEdit() {
    this.user = {
      id: 0,
      fullName: '',
      age: 0,
      gender: false,
      phoneNumber: '',
      address: '',
      email: '',
      role: '',
    };
    this.visible1 = false;
  }
  onSubmitEdit(userId: number, user: any) {
    this.userService.updateUser(this.user.id, this.user).subscribe(
      (response) => {
        console.log('Sửa tài khoản thành công', response);
        this.user = {
          id: 0,
          fullName: '',
          age: 0,
          gender: false,
          phoneNumber: '',
          address: '',
          email: '',
          role: '',
        };
        this.visible1 = false;
        this.loadUsersNew();
      },
      (error) => {
        console.error('Sửa tài khoản thất bại', error);
        this.user = {
          id: 0,
          fullName: '',
          age: 0,
          gender: false,
          phoneNumber: '',
          address: '',
          email: '',
          role: '',
        };
        this.visible1 = false;
        this.loadUsersNew();
      }
    );
  }
}
