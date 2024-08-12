import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { UserService } from '../../Service/UserService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any[] = [];
  totalRecords: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  textSearch: string = '';
  phoneSearch: string = '';
  addressSearch: string = '';
  selectedRole: string = '';
  selectedGender: string[] = [];

  role: SelectItem[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'Bác sĩ', value: 'bác sĩ' },
    { label: 'Bệnh nhân', value: 'bệnh nhân' },
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    // const combinedSearch = `${this.textSearch} ${this.phoneSearch} ${this.addressSearch}`;
    const sortData = 'fullName';
    const sortType = 'asc';

    this.userService
      // .getUsers(combinedSearch.trim(), sortData, sortType, this.currentPage, this.limit)
      .getUsers(this.textSearch, sortData, sortType, this.currentPage, this.limit)
      .subscribe((response) => {
        this.users = response.list;
        this.totalRecords = response.totalRecord;
      });
  }

  onFilter() {
    this.currentPage = 1;
    this.loadUsers();
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.limit = event.rows;
    this.loadUsers();
  }

  onRoleChange(event: any) {
    this.selectedRole = event.value;
    this.loadUsers();
  }

  onGenderChange(event: any) {
    const selectedGenders = [];
    if (event.target.value === 'male' && event.target.checked) {
      selectedGenders.push('Nam');
    }
    if (event.target.value === 'female' && event.target.checked) {
      selectedGenders.push('Nữ');
    }
    this.selectedGender = selectedGenders;
    this.loadUsers();
  }
}
