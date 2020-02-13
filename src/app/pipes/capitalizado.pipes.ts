import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

// tslint:disable-next-line: class-name
export class capitalizadoPipe implements PipeTransform {
  transform(value: string, test: boolean = true): string {
    value = value.toLowerCase();
    const nombres = value.split(' ');
    if (test) {
         // tslint:disable-next-line: forin
        for (const i in nombres) {
          nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }
}
