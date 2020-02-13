import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: any, status: boolean): any {
    let valorC = '';
    if ( status ) {
        for (const i of value) {
            valorC += '*';
        }
        return valorC;
    } else {
    return value;
    }
  }

}
