import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountEuro'
})
export class AmountEuroPipe implements PipeTransform {

  transform(value: number, symbol:string ): string {
    const total = Math.round(value * 100) / 10000;
    const totalString = total.toString().replace('.', ',');
    return totalString + '' + symbol;
  }

}
