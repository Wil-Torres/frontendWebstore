import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-lista',
  templateUrl: './marca-lista.component.html',
  styleUrls: ['./marca-lista.component.css']
})
export class MarcaListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nuevo (){
    alert('hola');
  }

  edicion () {
    alert('hola Edicion');
  }

}
