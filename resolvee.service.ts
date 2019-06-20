import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveeService implements Resolve<{name:string, source:string}[]>{


  players = [{name:'MS.DHONI', source:'assets/MS.DHONI.jpg'},
  {name:'V.KHOLI', source:'assets/V.KHOLI.jpg'},
  {name:'R.SHARMA', source:'assets/R.SHARMA.jpg'},
  {name:'R.JADEJA', source:'assets/R.JADEJA.jpg'}];

  constructor() { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<{name:string, source:string}[]> | Promise<{name:string, source:string}[]> 
    | {name:string, source:string}[]  {

      return this.players;
  }
}
