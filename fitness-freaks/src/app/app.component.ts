import { Component } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitness-freaks';

  panelOpenState = false;

}
