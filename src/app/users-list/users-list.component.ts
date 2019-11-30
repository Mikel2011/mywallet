import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "selenium-webdriver/http";
import { UsersService } from "../shared/services/users.service";

export interface UserList {
  company: string;
  username: string | number;
  password: string | number;
  role: string;
  phone: number;
  cell: number;
  id: string;
}
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  userlist: UserList[] = [];
  constructor(private http: HttpClient, public userservis: UsersService) {}

  ngOnInit() {
    this.http
      .get<UserList[]>("http://localhost:3000/data")
      .subscribe(userlist => {
        this.userlist = userlist;
        console.log("data", userlist);
      });
  }
}
