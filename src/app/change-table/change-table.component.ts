import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { IUser } from "../user.interface";
import { User } from "../user.modal";
import { UsersService } from "../shared/services/users.service";

@Component({
  selector: "app-change-table",
  templateUrl: "./change-table.component.html",
  styleUrls: ["./change-table.component.scss"]
})
export class ChangeTableComponent implements OnInit {
  thisUser: IUser; //cтворив зміну яка передається до кнопки delete
  editStatus:boolean=false;
  @ViewChild("closewindow", { static: false }) closewindow: ElementRef;

  constructor(
  public UsersService: UsersService // оголосив сервіс через зміну
  ) {}

  ngOnInit() {
    
  }

  areYouSureDelete(user: IUser): void {
    this.thisUser = user;
  }
 
  deleteTitle(user: IUser) {
    this.UsersService.arrCharges = this.UsersService.arrCharges.filter(
      i => i.id !== this.thisUser.id);
       }
     
  closeWindow() {
    this.closewindow.nativeElement.click();
  }

  editTitle(user: IUser): void{
  this.UsersService.title=user.title;
    this.UsersService.price= user.price;
    this.UsersService.id = user.id;
    this.UsersService.editStatus=true;
    this.UsersService.thisUser= user;
    this.UsersService.check = user.check;

    this.UsersService.check
      ? (this.UsersService.counterL -= +this.UsersService.thisUser.price)
      : (this.UsersService.counterL += +this.UsersService.thisUser.price);
  }
}
