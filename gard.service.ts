import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class GardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private auth:AuthenService, private router:Router) { }

    canActivate({ route, state} : { route: ActivatedRouteSnapshot, state: RouterStateSnapshot;}): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      let result=this.auth.isauthen();

      if(result==false){
        this.router.navigate(['/home']);
      }
      return result;
    }
    }
  

