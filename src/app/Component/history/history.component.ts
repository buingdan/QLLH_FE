import { History } from './../../Interface/History';
import { HistoryService } from './../../Service/HistorySevice/history.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  constructor(private historyService: HistoryService) {}
  histories: any[] = [];
  totalRecords: number = 0;
  currentPage: number = 1;
  limit: number = 5;
  visible: boolean = false;
  visible1: boolean = false;
  textSearch: string = '';
  history = {
    id: 0,
    insuranceCode: '',
    diagnostic: '',
    startDate: '',
    endDate: '',
  };

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    // const combinedSearch = `${this.textSearch} ${this.phoneSearch} ${this.addressSearch}`;
    const sortData = '';
    const sortType = 'asc';

    this.historyService
      // .getUsers(combinedSearch.trim(), sortData, sortType, this.currentPage, this.limit)
      .getHistory(
        this.textSearch,
        sortData,
        sortType,
        this.currentPage,
        this.limit
      )
      .subscribe((response) => {
        this.histories = response.list;
        this.totalRecords = response.totalRecord;
      });
  }
  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.limit = event.rows;
    this.loadHistory();
  }
  onSubmit() {
    this.historyService.addHistory(this.history).subscribe(
      (response) => {
        console.log('User added successfully', response);
        this.history = {
          id: 0,
          insuranceCode: '',
          diagnostic: '',
          startDate: '',
          endDate: '',
        };
        this.visible = false;
        this.loadHistory();
      },
      (error) => {
        console.error('Error adding user', error);
        this.history = {
          id: 0,
          insuranceCode: '',
          diagnostic: '',
          startDate: '',
          endDate: '',
        };
        this.visible = false;
        this.loadHistory();
      }
    );
  }
  showDialogAdd() {
    this.visible = true;
  }
  onCancelEdit() {
    this.history = {
      id: 0,
      insuranceCode: '',
      diagnostic: '',
      startDate: '',
      endDate: '',
    };
    this.visible1 = false;
  }
  onSubmitEdit(historyId: number, history: any) {
    this.historyService.updateHistory(this.history.id, this.history).subscribe(
      (response) => {
        console.log('Sửa tài khoản thành công', response);
        this.history = {
          id: 0,
          insuranceCode: '',
          diagnostic: '',
          startDate: '',
          endDate: '',
        };
        this.visible1 = false;
        this.loadHistory();
      },
      (error) => {
        console.error('Sửa tài khoản thất bại', error);
        this.history = {
          id: 0,
          insuranceCode: '',
          diagnostic: '',
          startDate: '',
          endDate: '',
        };
        this.visible1 = false;
        this.loadHistory();
      }
    );
  }
  showDialogEdit(history: any) {
    console.log(history);

    this.visible1 = true;
    this.history = {
      id: history.id,
      insuranceCode: history.insuranceCode,
      diagnostic: history.diagnostic,
      startDate: history.startDate,
      endDate: history.endDate,
    };
  }
  onDeleteHistory(history: any) {
    console.log(history);
    this.historyService.deleteHistory(history.id);
    this.loadHistory();
  }
}
