import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
*/ 

@Component({
  selector: 'app-root',
  template: `
    <!-- {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir Componente</button> 
    <app-diretivas-estruturais></app-diretivas-estruturais>-->
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributos</h1>
      <hr> 
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,

})
export class AppComponent implements OnInit {

  //public valor: number = 1;

  // public destruir: boolean = true

  constructor() {

  }

  // public adicionar(): number {
  //   return this.valor +=1;
  // }

  ngOnInit(): void { }

  // public destruirComponent() {
  //   this.destruir = false;
  // }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit")
  // }

  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked")
  // }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit")
  // }

  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked")
  // }

}
