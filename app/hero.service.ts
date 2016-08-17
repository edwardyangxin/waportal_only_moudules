/**
 * Created by sevncz on 16-8-11.
 */

import { Injectable } from "@angular/core";
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero.ts'

import { Observable }     from 'rxjs/Observable';




@Injectable()
export class HeroService{
  private heroesUrl = 'http://127.0.0.1:5017/fauth/web/bg/users';  // URL to web api
  // private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHero(id: number){
    return {id: 1, name: 'hellll'};
  }

  getHeroes(): Observable<Hero[]>{
    // return this.http.get(this.heroesUrl)
    //   .toPromise()
    //   .then(response => response.json().data as Hero[])
    //   .catch(this.handleError);
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // save(hero: Hero): Promise<Hero>{
  //   if (hero.id) {
  //     return this.put(hero);
  //   }
  //   return this.post(hero);
  // }
  //
  // private post(hero: Hero): Promise<Hero>{
  //   let headers = new Headers({
  //     'Content-Type': 'appication/json'
  //   });
  //   return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }
  //
  // private put(hero: Hero): Promise<Hero>{
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url = `${this.heroesUrl}/${hero.id}`;
  //   console.log(url);
  //
  //   return this.http.put(this.heroesUrl, JSON.stringify(hero), {headers: headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}

