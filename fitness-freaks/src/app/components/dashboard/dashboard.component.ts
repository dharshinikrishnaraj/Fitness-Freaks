import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  panelOpenState = false;
  userList: any = [];

  constructor(private router: Router, private commonservice: CommonService ){ }
  
  ngOnInit(): void {
    this.commonservice.getUser().subscribe((data: any) =>{
      this.userList = data;
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['home']);
  }
  
}
