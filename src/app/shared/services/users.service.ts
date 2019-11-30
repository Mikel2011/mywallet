import { Injectable } from "@angular/core";
import { IUser } from "src/app/user.interface";
import { UserList } from "src/app/users-list/users-list.component";

@Injectable({
  providedIn: "root"
})
export class UsersService implements IUser {
  static byList() {
    throw new Error("Method not implemented.");
  }
  byIncomCheck: boolean;
  byExspensCheck: boolean;
  byAllListCheck: boolean = true;
  status: boolean;
  editStatus: boolean;
  id: number;
  title: string;
  price: string;
  date: string;
  check: boolean = true;
  checkMoney: boolean = false;
  thisUser: IUser;
  thisDetailUser: UserList;
// arrExspense:IUser;
  counterL: number = 400;
  search: string = "";
  // checkIncomOrExspense: boolean = true;
  arrCharges: Array<IUser> = [
    {
      id: 17,
      title: "Products",
      price: "10",
      date: "12",
      check: true,
      checkMoney: false,
      status: true
    },

    {
      id: 88,
      title: "Beer",
      price: "6",
      date: "23",
      check: false,
      checkMoney: false,
      status: false
    },
    {
      id: 78,
      title: "Diesel",
      price: "20",
      date: "23",
      check: false,
      checkMoney: false,
      status: false
    },
    {
      id: 90,
      title: "Milk",
      price: "3",
      date: "23",
      check: true,
      checkMoney: false,
      status: true
    }
  ];
  result: IUser[];
  static result: any;
  static arrCharges: any;

  constructor() {
    this.status == this.check;
  }
  checkIncome(): void {
    this.check = true;
    console.log(this.check);
  }
  checkExspense(): void {
    this.check = false;
    console.log(this.check);
  }
  byIncome() {
    this.arrCharges = this.arrCharges
      .filter(i => i.check == false)
      .concat(this.arrCharges.filter(i => i.check == true));
  }

  byExspense() {

   this.arrCharges = this.arrCharges
      .filter(i => i.check == true)
      .concat(this.arrCharges.filter(i => i.check == false));
  }

  byList() {
    this.arrCharges = this.arrCharges
    .filter(user => {
      return user.title !== ""
    });

  }

  moreDetails(post: UserList) {
    this.thisDetailUser = post;
  }
}
