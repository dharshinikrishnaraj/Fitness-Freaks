import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [' ',[Validators.required, Validators.minLength(10)]],
      address: [' ',Validators.required],
      weight: ['',Validators.required],
      height: ['', Validators.required],
      package: ['', Validators.required],
      trainer: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  OnSubmit(form: FormGroup){
    console.log(form.value.name, form.value.phone, form.value.address, form.value.weight,
    form.value.height, form.value.package, form.get('trainer')?.value, form.value.date);
  }

}
