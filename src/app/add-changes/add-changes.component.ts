import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IUser } from "../user.interface";
import { User } from "../user.modal";
import { UsersService } from "../shared/services/users.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-changes",
  templateUrl: "./add-changes.component.html",
  styleUrls: ["./add-changes.component.scss"]
})

export class AddChangesComponent implements OnInit {
  form: FormGroup;
  editStatus: boolean;
  check: boolean = false;
  @ViewChild("closeModel", { static: false }) closeModel: ElementRef;
  @ViewChild("closeSave", { static: false }) closeSave: ElementRef;

  constructor(
    public UsersService: UsersService // оголосив сервіс через зміну
  ) {}
  //створюю валідатор
  ngOnInit() {
    this.form = new FormGroup({
      userTitle: new FormControl(" ", [
        Validators.required,
        Validators.minLength(4)
      ]),
      userPrice: new FormControl(null, [Validators.required]),
      userData: new FormControl(null, [Validators.required])
    });
  }

  AddTitle(): void {
    const newChar: IUser = new User(
      1,
      this.UsersService.title,
      this.UsersService.price,
      this.UsersService.date,
      this.UsersService.check,
      this.UsersService.checkMoney,
      this.UsersService.status == this.UsersService.check
    );

    if (this.UsersService.arrCharges.length > 0) {
      newChar.id = this.UsersService.arrCharges.slice(-1)[0].id + 1; //new id
    }
    this.UsersService.arrCharges.push(newChar); // push new user to arr

      this.form.reset()

       this.UsersService.check
      ? (this.UsersService.counterL += +newChar.price)
      : (this.UsersService.counterL -= +newChar.price);
    this.closeModel.nativeElement.click();
  }

  SaveTitle() {
    this.UsersService.thisUser.title = this.UsersService.title;
    this.UsersService.thisUser.price = this.UsersService.price;
    this.UsersService.editStatus = false;
    this.UsersService.thisUser.check = this.UsersService.check;
    this.form.reset()
    //change balance
    this.UsersService.check
      ? (this.UsersService.counterL += +this.UsersService.thisUser.price)
      : (this.UsersService.counterL -= +this.UsersService.thisUser.price);
    this.closeModel.nativeElement.click();
  }
  closeSav() {
    this.closeSave.nativeElement.click();
  }
}
