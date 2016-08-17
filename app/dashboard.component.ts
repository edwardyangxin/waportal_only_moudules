/**
 * Created by sevncz on 16-8-12.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero.ts';
import { HeroService } from './hero.service';

// templateUrl: 'app/dashboard.component.html',
// template: require('app/dashboard.component.html'),
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

  errorMessage(msg: string){
    console.log(msg)
  }
}
