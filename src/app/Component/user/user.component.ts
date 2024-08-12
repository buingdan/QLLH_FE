import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users = [{ name: 'Nguyễn Văn A', age: 30, gender: 'Nam', phone: '0901234567', address: 'Hà Nội', email: 'a@example.com', role: 'Admin' },
    { name: 'Trần Thị B', age: 25, gender: 'Nữ', phone: '0907654321', address: 'TP. Hồ Chí Minh', email: 'b@example.com', role: 'Bác sĩ' },
    { name: 'Lê Văn C', age: 28, gender: 'Nam', phone: '0908765432', address: 'Đà Nẵng', email: 'c@example.com', role: 'Bệnh nhân' },
    { name: 'Phạm Thị D', age: 22, gender: 'Nữ', phone: '0909876543', address: 'Cần Thơ', email: 'd@example.com', role: 'Bệnh nhân' }];
  role: any[]
  constructor() {
    this.role = [ "admin", "bác sĩ"," bệnh nhân"]
  }

  ngOnInit(): void {}
}
