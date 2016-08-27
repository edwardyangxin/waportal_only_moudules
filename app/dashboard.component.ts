/**
 * Created by sevncz on 16-8-12.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})


export class DashboardComponent{
  constructor(
    private router: Router) {
  }

  errorMessage(msg: string){
    console.log(msg)
  }
}
