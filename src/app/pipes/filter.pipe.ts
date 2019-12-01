import { Pipe, PipeTransform } from "@angular/core";
import { User } from '../user.modal';
// import { User } from "../User";
// import { post } from 'selenium-webdriver/http';

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(arrCharges: User[], search: string): User[] {
    if (!search.trim()) {
      return arrCharges;
    }
    return arrCharges.filter(user => {
      return user.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}


