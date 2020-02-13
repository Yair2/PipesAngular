import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ThrowStmt } from '@angular/compiler';
@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private donSanitizer: DomSanitizer) {

  }
  transform(value: string, url: string): any {
    return this.donSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
