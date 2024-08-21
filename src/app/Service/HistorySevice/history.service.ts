import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private apiUrl = 'http://localhost:8085/api/v1/history';

  constructor(private http: HttpClient) {}

  getHistory(
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
  deleteHistory(historyId: number) {
    this.http.delete(this.apiUrl + "/delete/" + `${historyId}`).subscribe({
      next: () => {
        console.log('Xóa lịch sử thành công');
      },
      error: (err) => {
        console.error('Lỗi hệ thống:', err);
      }
    });
  }
  addHistory(history: any) {
    return this.http.post(this.apiUrl + "/add", history);
  }

  updateHistory(historyId: number, history: any) {
    return this.http.put(this.apiUrl + "/update/"+ `${historyId}`, history);
  }
}
