import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

players = [
  {login:'mojombo', avatra_url:'https://avatars0.githubusercontent.com/u/1?v=4'},
  {login:'defunkt', avatra_url:'https://avatars0.githubusercontent.com/u/2?v=4'},
  {login:'pjhyett', avatra_url:'https://avatars0.githubusercontent.com/u/3?v=4'},
  {login:'wycats', avatra_url:'https://avatars0.githubusercontent.com/u/4?v=4'},
  {login:'ezmobius', avatra_url:'https://avatars0.githubusercontent.com/u/5?v=4'},
{login:'ivey', avatra_url:'https://avatars0.githubusercontent.com/u/6?v=4'},
  

]

getplayers(){
   return this.players;
}
}
