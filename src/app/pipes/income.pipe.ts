import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.modal';


@Pipe({
  name: 'income'
})
export class IncomePipe implements PipeTransform {
  typeSort: string;
  transform(arrCharges: User[], type:string): User[]{
    if (type === 'all') return arrCharges;
    return arrCharges.filter(element =>
           element.type === type
         );
          }
    
  }
    
  

  
  