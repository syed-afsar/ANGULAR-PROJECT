import { Component, OnInit } from '@angular/core';
import { PlayersservicesService } from '../playersservices.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
players:{name:string, source:string}[];
  constructor(private act:ActivatedRoute, private myrouter:Router) { }

  ngOnInit() {
    // this.players=this.serv.getplayers();
    this.players=this.act.snapshot.data['playersdata'];
  }
  playerclick(playerser: string, playsour: string){
    this.myrouter.navigate(['/player', playerser, playsour]);
  }

}
