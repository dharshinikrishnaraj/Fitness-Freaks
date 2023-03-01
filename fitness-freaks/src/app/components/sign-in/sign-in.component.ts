import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: any = FormGroup;
  users: any = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private commonservice: CommonService){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })

    this.commonservice.getUser().subscribe((data: any) =>{
      this.users = data;
    })
  }

  clickRegister(){
    this.router.navigate(['/register'])
  }



  onSubmit(data: any){

   if(data.name){
    this.users.forEach((item: any) => {
      if(item.name === data.name && item.phone === data.phone){
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['/dashboard']);
      }
      else{
        localStorage.clear();
      }
    });
   }

  }


}
