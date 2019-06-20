import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  constructor() { }

getemployee(){
  return[{"id": 1, "name":"syed"},
         {"id": 2, "name":"RAM"},
         {"id": 3, "name":"JOEPH"},

];}
}
