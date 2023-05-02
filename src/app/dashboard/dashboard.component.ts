import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setTimeout } from 'timers';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  userDataForm: FormGroup = new FormGroup({});
  isDisabled = false;
  constructor(private appservice: AppService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userDataForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ["", Validators.required],
        age: ["", Validators.required],
        post: ["", Validators.required],
        salary: ["", Validators.required],
        id: [""]
      }
    )
    this.appservice.getdata().subscribe((res) => {
      this.data = res;
    })
  }

  modalDetail(d: any, id: number, isDisabled: boolean) {
    this.userDataForm.setValue({
      name: d.name,
      email: d.email,
      age: d.age,
      post: d.post,
      salary: d.salary,
      id: id
    });
    this.isDisabled = isDisabled;
  }

  submit() {
    this.appservice.update(this.userDataForm.value).subscribe(() => {
      this.appservice.getdata().subscribe((res) => {
        this.data = res;
      })
    })
  }

  deleteDetail(data: any) {
    this.appservice.deleteDate(data.id).subscribe(() => {
      this.appservice.getdata().subscribe((res) => {
        this.data = res;
      })
    })
  }
}
