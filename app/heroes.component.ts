import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero.ts';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


// templateUrl: 'app/heroes.component.html',
// template: require('./heroes.component.html'),
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']

})
export class HeroesComponent implements OnInit{
  heroes: Hero[];

  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  errorMessage(msg: string){
    console.log(msg)
  }
}





