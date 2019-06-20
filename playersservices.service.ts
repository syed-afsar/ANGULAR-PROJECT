import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersservicesService {

  players = [{name:'MS.DHONI', source:'assets/MS.DHONI.jpg'},
             {name:'V.KHOLI', source:'assets/V.KHOLI.jpg'},
             {name:'R.SHARMA', source:'assets/R.SHARMA.jpg'},
             {name:'R.JADEJA', source:'assets/R.JADEJA.jpg'},
             {name:'H.PANDYA', source:'assets/H.PANDYA.jpg'}];

  getplayers(){
    return this.players;
  }
}
