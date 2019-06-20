import { Component, OnInit } from '@angular/core';
import { PlayersservicesService } from '../playersservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players:{name:string, source:string}[];
playe:string;
src:string;
  constructor(private myserv:PlayersservicesService, private activate:ActivatedRoute) { }

  ngOnInit() {
    this.players=this.myserv.getplayers();
this.playe = this.activate.snapshot.paramMap.get('nameof');
this.src = this.activate.snapshot.paramMap.get('source');
  }

}
