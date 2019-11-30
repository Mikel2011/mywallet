import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.modal';


@Pipe({
  name: 'income'
})
export class IncomePipe implements PipeTransform {
  transform(arrCharges: User[], check:boolean): User[] {
    if(check==true){
      return arrCharges
    }
    return arrCharges.filter(user => {
      return user.check==false
    });
  }
    
  }