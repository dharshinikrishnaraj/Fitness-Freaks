import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerform: any = FormGroup;

  isLinear = false;

  constructor(private formBuilder: FormBuilder, private commonservice: CommonService, private router: Router){
  }

  ngOnInit()
  {
    this.registerform = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [' ',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: [' ',Validators.required],
      weight: ['',Validators.required],
      height: ['', Validators.required],
      package: ['', Validators.required],
      trainer: ['', Validators.required],
      startdate: ['', Validators.required],
     });
  }

  onSubmit(data: any ){
    let dataToPass = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      weight: data.weight,
      height: data.height,
      package: data.package,
      trainer: data.trainer,
      startdate: data.startdate
    }
    this.commonservice.addUser(dataToPass).subscribe((data: any) =>{
      console.log(data);
      this.router.navigate(['/home']);
      alert('Your details are successfully submitted!');
  })
  }

}
