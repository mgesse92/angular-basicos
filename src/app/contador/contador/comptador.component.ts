import { Component } from '@angular/core';

@Component({
    selector: 'app-comptador',
    template: `
        <h1>{{titulo}}</h1>
        <h1>{{1+1}}</h1>

        <hr />

        <h3>La base és: <strong>{{ base }}</strong></h3>


        <button (click)="acumular(base)"> +{{base}}  </button>

        <span>{{ numero }}</span>

        <button (click)="acumular(-base)"> -{{base}}  </button>
    `
})

export class ComptadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
    
    sumar(){
      //El this fa referència a la propietat, ja sque som dins de la instància i ho requereix.
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular(valor:number){    
        this.numero += valor;
    }

}