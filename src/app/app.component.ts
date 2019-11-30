import { Component, OnInit } from '@angular/core';
import * as AOS from '../../node_modules/aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My-wallet';
ngOnInit(){
  // AOS.init({
  //   offset: 200,
  //   duration: 6000,
  //   easing: 'fade-in',
  //   delay: 1000,
  // });
}

}

