import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  displayedColumns: string[] = ['sets', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  panelOpenState = false;
  userList: any = [];

  constructor(private router: Router, private commonservice: CommonService ){ }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

export interface PeriodicElement {
  Sets: number;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  {"Sets":2,"Monday":"Normal Pushups","Tuesday":"Wide grip pushups","Wednesday":"Single hand pushups","Thursday":"Inclined Pushups","Friday":"Close grip Pushups"},
  {"Sets":3,"Monday":"Pull ups","Tuesday":"Wide grip Pull ups","Wednesday":"Pull ups","Thursday":"Wide grip Pull ups","Friday":"Pull ups"},
  {"Sets":3,"Monday":"Flat Bench press","Tuesday":"Lat Pull Down","Wednesday":"Incline Dumbbell Hammer Curl","Thursday":"Assisted Reverse Side Situp","Friday":"Sit Ups"},
  {"Sets":2,"Monday":"Flat Bench Dumbell Fly","Tuesday":"Lat Pull Down Wide grip","Wednesday":"Incline Inner-Biceps Curl","Thursday":"Bent Leg V-Up","Friday":"Leg Press"},
  {"Sets":3,"Monday":"Inclined Bench press","Tuesday":"T-Bar","Wednesday":"EZ-Bar Curl","Thursday":"Alternating Toe Reach","Friday":"Step-Up"},
  {"Sets":2,"Monday":"Inclined Bench Dumbell Fly","Tuesday":"T-Bar Close Grip","Wednesday":"Wide-grip standing barbell curl","Thursday":"Leg Raise and Reach Clap","Friday":"Pistol Squat"},
  {"Sets":3,"Monday":"Decline Bench press","Tuesday":"Bent Over Barbell row","Wednesday":"Zottman Curl","Thursday":"Lying Windshield Wipers","Friday":"Glute-Ham Raise"},
  {"Sets":2,"Monday":"Decline Bench Dumbell Fly","Tuesday":"Single Arm Dumbbell Rows","Wednesday":"Regular-Grip Barbell Curl","Thursday":"Russian Twist","Friday":"Walking Lunge"},
  {"Sets":3,"Monday":"Butterfly","Tuesday":"Swing Rows","Wednesday":"Dumbbell Biceps Curl","Thursday":"Side-To-Side Crunch","Friday":"Bulgarian Split Squat"},
  {"Sets":3,"Monday":"Overhead Dumbell Fly","Tuesday":"Underhand Pull","Wednesday":"Hammer Curl.","Thursday":"Side Plank Dips","Friday":"Hack Squat"},
  {"Sets":3,"Monday":"Cable Cross","Tuesday":"Prone Dumbbell Incline Bench Row","Wednesday":"OverHead Cable Curl","Thursday":"Side Plank and Reach Through","Friday":"Romanian Deadlift"},
  {"Sets":3,"Monday":"Cable Cross Inclined","Tuesday":"Intercepts Stretching","Wednesday":"Wrist Curls","Thursday":"Toe Reach","Friday":"BarBell Squat"}

];
