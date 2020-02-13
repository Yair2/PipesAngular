import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Alek Jay';
  nombre2 = 'aLek jaY meLendez';
  arreglo: number[] = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 2500;
  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : '500',
    direccion : {
      calle : 'Primera',
      casa : '19' }
  };
  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Llego la data') , 3500);
  });

  fecha = new Date();

  url = 'S3lcm82KynA';

  pass = true;
}
