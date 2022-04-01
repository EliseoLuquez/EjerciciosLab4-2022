import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.component.html',
  styleUrls: ['./ejercicio02.component.css']
})
export class Ejercicio02Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goLogin(){
    this.router.navigate(['login']);
  }
  goBienvenido(){
    this.router.navigate(['bienvenido']);
  }
  goError(){
    this.router.navigate(['error']);
  }

}
