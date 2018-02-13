import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // expoe uma propriedade nome para o seletor app-curso
  @Input('nome') nomeCurso:string="";

  constructor() { }

  ngOnInit() {
  }

}
