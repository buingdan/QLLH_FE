import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  appointment:any[] = [
    {
      patient_name: "Bùi Nguyên Đán",
      social_insurance_number: "1234567890",
      diagnosis: "Viêm phổi",
      admission_date: "2024-07-01",
      discharge_date: "2024-07-10",
      notes: "Bệnh nhân hồi phục tốt"
    },
    {
      patient_name: "Trần Đức Duy",
      social_insurance_number: "0987654321",
      diagnosis: "Gãy xương tay",
      admission_date: "2024-07-05",
      discharge_date: "2024-07-15",
      notes: "Đã phẫu thuật thành công"
    },
    {
      patient_name: "Nguyễn Văn Mạnh",
      social_insurance_number: "1122334455",
      diagnosis: "Viêm dạ dày",
      admission_date: "2024-07-02",
      discharge_date: "2024-07-09",
      notes: "Cần theo dõi thêm"
    },
    {
      patient_name: "Cao Văn Tân",
      social_insurance_number: "2233445566",
      diagnosis: "Suy tim",
      admission_date: "2024-07-03",
      discharge_date: "2024-07-13",
      notes: "Đang điều trị ngoại trú"
    },
    {
      patient_name: "Phạm Thành Đạt",
      social_insurance_number: "3344556677",
      diagnosis: "Đau đầu kinh niên",
      admission_date: "2024-07-06",
      discharge_date: "2024-07-12",
      notes: "Đã cải thiện tình trạng"
    }
  ]
}
