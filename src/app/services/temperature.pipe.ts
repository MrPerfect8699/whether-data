import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, args:string): any {
    if(args == 'C'){
      value = value-273.15;
      return value.toFixed(2);
    }
    if(args == 'F'){
      value = (value-32)/1.8;
      return value.toFixed(2);
    }
    
  }

}
