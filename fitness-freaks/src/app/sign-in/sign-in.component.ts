import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: any = FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  clickRegister(){
    this.router.navigate(['/register'])
  }



  onSubmit(data: any){
    console.log(data);
  }


}
