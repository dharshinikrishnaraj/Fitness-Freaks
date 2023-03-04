import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  panelOpenState = false;

  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '450px',
      height: '350px',
    });
}
}
