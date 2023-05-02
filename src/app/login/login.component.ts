import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({})
  constructor(private formBuilder:FormBuilder,
    private router:Router) { }
    
 
  ngOnInit(): void {
      this.loginFormGroup = this.formBuilder.group({
        userName: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      })
      let JSONDatas =  {
          "userName":"admin",
          "password":"admin"
        }
      localStorage.setItem('datas',JSON.stringify(JSONDatas))
    }
    
    public loginDetail():void {
      if(this.loginFormGroup.valid) {
      let data = JSON.parse(localStorage.getItem("datas") as any);
        const logindata = data.userName === this.loginFormGroup.value.userName && data.password === this.loginFormGroup.value.password

        if(logindata){
          this.router.navigate(['/dashboard']);
        }
    }
  }
}
