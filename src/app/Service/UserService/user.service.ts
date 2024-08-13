import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}

  getUsers(
    textSearch: string,
    sortData: string,
    sortType: string,
    currentPage: number,
    limit: number
  ): Observable<any> {
    let params = new HttpParams()
      .set('textSearch', textSearch)
      .set('sortData', sortData)
      .set('sortType', sortType)
      .set('currentPage', currentPage.toString())
      .set('limit', limit.toString());

    return this.http.get(this.apiUrl+ "/page", { params });
  }
  deleteUser(userId: number) {
    this.http.delete(this.apiUrl + "/delete/" + `${userId}`).subscribe({
      next: () => {
        console.log('Xóa tài khoản thành công');
      },
      error: (err) => {
        console.error('Lỗi hệ thống:', err);
      }
    });
  }
  addUser(user: any) {
    return this.http.post(this.apiUrl + "/add", user);
  }

  updateUser(userId: number, user: any) {
    return this.http.put(this.apiUrl + "/update/"+ `${userId}`, user);
  }
}
