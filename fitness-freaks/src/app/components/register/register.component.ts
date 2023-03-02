import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;
  id: any = 10;

  isLinear = false;

  constructor(private formBuilder: FormBuilder, private commonservice: CommonService  ){
  }

  ngOnInit()
  {
    this.firstFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    phone: [' ',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address: [' ',Validators.required],
    weight: ['',Validators.required],
    height: ['', Validators.required]
  });
  this.secondFormGroup = this.formBuilder.group({
      package: ['', Validators.required],
      trainer: ['', Validators.required],
      startdate: ['', Validators.required],
     });
  }

  onSubmit( ){
    console.log(this.firstFormGroup.address.value);
    console.log(this.secondFormGroup.value);
  }

}
