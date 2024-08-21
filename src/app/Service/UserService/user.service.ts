import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8085/api/v1/users';

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

  getUsersNew(
    nameSearch: string,
    phoneNumber: string,
    addressSearch: string,
    roleSearch: string,
    genderSearch: boolean[],
    sortData: string,
    sortType: string,
    currentPage: number,
    limit: number
  ): Observable<any> {
    let params = new HttpParams()
      .set('nameSearch', nameSearch)
      .set('phoneSearch', phoneNumber)
      .set('addressSearch', addressSearch)
      .set('genderSearch', genderSearch.join(','))
      .set('roleSearch', roleSearch)
      .set('sortData', sortData)
      .set('sortType', sortType)
      .set('currentPage', currentPage.toString())
      .set('limit', limit.toString());

    return this.http.get(this.apiUrl+ "/page_new", { params });
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
