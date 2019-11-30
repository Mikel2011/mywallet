import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { UserList } from "../users-list/users-list.component";
import { UsersService } from "../shared/services/users.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  idUser: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public UsersService: UsersService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = params.id;
      this.getUser();
    });
  }
  getUser() {}

  return(): void {
    this.location.back();
  }
}
