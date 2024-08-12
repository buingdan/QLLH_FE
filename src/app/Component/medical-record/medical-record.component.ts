import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrl: './medical-record.component.css',
})
export class MedicalRecordComponent {
  medical_record:any[] = [
    {
      patient_name: 'Nguyễn Văn A',
      symptoms_description: 'Ho, sốt nhẹ, đau họng',
      appointment_time: '2024-08-15T10:00:00',
      attending_doctor: 'Dr. Trần Thị Bích Ngọc',
    },
    {
      patient_name: 'Trần Thị B',
      symptoms_description: 'Đau đầu, mệt mỏi, buồn nôn',
      appointment_time: '2024-08-16T14:30:00',
      attending_doctor: 'Dr. Phạm Văn Cường',
    },
    {
      patient_name: 'Lê Minh C',
      symptoms_description: 'Đau bụng dưới, tiêu chảy',
      appointment_time: '2024-08-17T09:00:00',
      attending_doctor: 'Dr. Nguyễn Văn Tùng',
    },
    {
      patient_name: 'Phạm Thị D',
      symptoms_description: 'Khó thở, đau ngực, ho ra máu',
      appointment_time: '2024-08-18T11:15:00',
      attending_doctor: 'Dr. Lê Thị Thanh Hương',
    },
    {
      patient_name: 'Hoàng Văn E',
      symptoms_description: 'Mất ngủ, lo âu, cảm thấy buồn chán',
      appointment_time: '2024-08-19T15:45:00',
      attending_doctor: 'Dr. Nguyễn Thị Mai Lan',
    },
    {
      patient_name: 'Võ Thị F',
      symptoms_description: 'Đau lưng, tê chân, khó khăn khi di chuyển',
      appointment_time: '2024-08-20T08:30:00',
      attending_doctor: 'Dr. Trương Quang Minh',
    },
  ];
  constructor() {

  }

  ngOnInit(): void {}
}
