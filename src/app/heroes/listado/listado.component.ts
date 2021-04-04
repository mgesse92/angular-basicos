import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk','Thor','Captain America'];
  deletedHero: string = '';
  borrarHeroe(){
    const numHero : number = this.heroes.length;
    if(numHero > 0){
      this.heroes.splice(numHero-1, 1);
      console.log('Borrarando...');
    }        
  }

  borrarUnHeroe(){
    this.deletedHero = this.heroes.shift() || '';
    console.log(this.deletedHero);

  }

  checkHeroExist(): boolean {
    if(this.deletedHero.length >0 ){
      return true;
    }else{
      return false;
    }
  }

}
