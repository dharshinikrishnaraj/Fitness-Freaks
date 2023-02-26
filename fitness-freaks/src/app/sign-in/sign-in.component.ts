import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      name: [''],
      phone: ['']

    })
  }

  onSubmit(form: FormGroup){
    console.log(form.value.name);
     if (form.valid) {
        console.log(form.value.name);
    } else {
        console.log('There is a problem with the form');
    }
  }
}
