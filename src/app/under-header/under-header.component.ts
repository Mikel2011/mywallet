import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-under-header',
  templateUrl: './under-header.component.html',
  styleUrls: ['./under-header.component.scss']
})
export class UnderHeaderComponent implements OnInit {
  search: string = "";
  counter: number = this.UsersService.counterL;
  constructor(public UsersService: UsersService) {
   
  }

  ngOnInit() {}

 
 

 }