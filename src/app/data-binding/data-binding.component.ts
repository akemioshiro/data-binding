
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  cursoAngular:boolean = true;
  urlImagem:string = "http://lorempixel.com/400/200/nature/";
  valorAtual:string = "";
  valorSalvo:string = "";
  isMouseOver:boolean = false;
  nomeCurso:string = 'Angular';
  valorInicial =15;

  constructor() { }

  getValor(){
    return 1
  }

  botaoClicado()
  {
    alert("botao clicado");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit() {
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

}
