import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/users/page';

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

    return this.http.get(this.apiUrl, { params });
  }
}
