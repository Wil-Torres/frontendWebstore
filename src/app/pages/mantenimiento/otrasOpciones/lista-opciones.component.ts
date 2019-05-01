import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-opciones',
  templateUrl: './lista-opciones.component.html',
  styles: [`
  .container2{
    width: 100%;
    position: absolute;
    z-index: 1;
  }
  .progressbar{
    counter-reset: step
  }

  .progressbar li{
    list-style-type:none;
    float: left;
    width: 20%;
    position: relative;
    text-align: center;
  }
  .progressbar li:before{
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 2px solid #bebebe;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background: white;
    color: #bebebe;
    font-weight: bold;
  }
  .progressbar li:after {
    content: '';
    position: absolute;
    width:100%;
    height: 3px;
    background-color: #979797;
    top: 15px;
    left: -50%;
    z-index: -1;
  }
  .progressbar li:first-child:after{
    content: none;
  }
  .progressbar li.active {
    color: green;
  }
  .progressbar li.active:before {
    border-color: green;
  }
  .progressbar li.active + li:after{
    background: #3aac5d;
  }
  .progressbar li.active + li:before{
    border-color: #3aac5d;
    background: #3aac5d;
    color: white
  }
  #progressbar li:nth-child(2):before{
    content: "fa fa-bandcamp";
  }


  .steps .step {
    display: block;
    width: 100%;
    margin-bottom: 35px;
    text-align: center
  }
  
  .steps .step .step-icon-wrap {
    display: block;
    position: relative;
    width: 100%;
    height: 65px;
    text-align: center
  }
  
  .steps .step .step-icon-wrap::before,.steps .step .step-icon-wrap::after {
    display: block;
    position: absolute;
    top: 50%;
    width: 50%;
    height: 3px;
    margin-top: -1px;
    background-color: #e1e7ec;
    content: '';
    z-index: 1
  }
  
  .steps .step .step-icon-wrap::before {
    left: 0
  }
  
  .steps .step .step-icon-wrap::after {
    right: 0
  }
  
  .steps .step .step-icon {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
    border: 1px solid #e1e7ec;
    border-radius: 50%;
    background-color: #f5f5f5;
    color: #374250;
    font-size: 24px;
    line-height: 62px;
    z-index: 5;
  }
  
  .steps .step .step-title {
    margin-top: 16px;
    margin-bottom: 0;
    color: #606975;
    font-size: 14px;
    font-weight: 500
  }
  
  .steps .step:first-child .step-icon-wrap::before {
    display: none
  }
  
  .steps .step:last-child .step-icon-wrap::after {
    display: none
  }
  
  .steps .step.completed .step-icon-wrap::before,.steps .step.completed .step-icon-wrap::after {
    background-color: #0da9ef
  }
  
  .steps .step.completed .step-icon {
    border-color: #0da9ef;
    background-color: #0da9ef;
    color: #fff
  }
  
  @media (max-width: 576px) {
    .flex-sm-nowrap .step .step-icon-wrap::before,.flex-sm-nowrap .step .step-icon-wrap::after {
        display:none
    }
  }
  
  @media (max-width: 768px) {
    .flex-md-nowrap .step .step-icon-wrap::before,.flex-md-nowrap .step .step-icon-wrap::after {
        display:none
    }
  }
  
  @media (max-width: 991px) {
    .flex-lg-nowrap .step .step-icon-wrap::before,.flex-lg-nowrap .step .step-icon-wrap::after {
        display:none
    }
  }
  
  @media (max-width: 1200px) {
    .flex-xl-nowrap .step .step-icon-wrap::before,.flex-xl-nowrap .step .step-icon-wrap::after {
        display:none
    }
  }

  
  `]
})
export class ListaOpcionesComponent implements OnInit {
  trayectoPedido: any = {};

  constructor() { }

  ngOnInit() {
  }

}
