import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ComptadorComponent } from './contador/contador/comptador.component';
import { HeroesModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';

//Crear un modulo para el contador.
//Hacer las declaraciones y exportaciones
import { contadorModule} from './contador/contador.module'

@NgModule({
  declarations: [
    AppComponent,
     //ComptadorComponent
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
