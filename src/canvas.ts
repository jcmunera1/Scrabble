import {Application} from 'pixi.js';
import Layout from "./layout";
import {Sprites} from "./imageloader";
import Letras from "./letras";

//Crea clase canvas...
export default class Canvas {
  private app: Application;
  //public layout1: Layout;
  //public letras:Letras;

  //constructor clase, se dan los parametros para crear la app... element: donde se inserta el canvas
  constructor(
    //sprites: Sprites,
    width: number,
    height: number,
    backgroundColor: number,
    element: HTMLElement = document.body) {
    // Instanciar una nueva aplicacion de pixi
    this.app = new Application({width, height, backgroundColor});
    element.appendChild(this.app.view);
    //this.layout1 = new Layout(this.app.ticker, 500, 200, 400, 150, 'Scrabble Typescript', 300);

    const letras = [
      {letra: 'A', puntaje: 1, cantidad: 12},
      {letra: 'B', puntaje: 3, cantidad: 2},
      {letra: 'C', puntaje: 3, cantidad: 12},
      {letra: 'CH', puntaje: 5, cantidad: 1},
      {letra: 'D', puntaje: 2, cantidad: 5},
      {letra: 'E', puntaje: 1, cantidad: 12},
      {letra: 'F', puntaje: 4, cantidad: 1},
      {letra: 'G', puntaje: 2, cantidad: 2},
      {letra: 'H', puntaje: 4, cantidad: 2},
      {letra: 'I', puntaje: 1, cantidad: 6},
      {letra: 'J', puntaje: 8, cantidad: 1},
      {letra: 'L', puntaje: 1, cantidad: 4},
      {letra: 'LL', puntaje: 8, cantidad: 1},
      {letra: 'M', puntaje: 2, cantidad: 5},
      {letra: 'N', puntaje: 2, cantidad: 5},
      {letra: 'Ñ', puntaje: 2, cantidad: 5},
      {letra: 'O', puntaje: 2, cantidad: 5},
      {letra: 'P', puntaje: 2, cantidad: 5},
      {letra: 'Q', puntaje: 2, cantidad: 5},
      {letra: 'R', puntaje: 2, cantidad: 5},
      {letra: 'RR', puntaje: 2, cantidad: 5},
      {letra: 'S', puntaje: 2, cantidad: 5},
      {letra: 'T', puntaje: 2, cantidad: 5},
      {letra: 'U', puntaje: 2, cantidad: 5},
      {letra: 'V', puntaje: 2, cantidad: 5},
      {letra: 'W', puntaje: 2, cantidad: 5},
      {letra: 'X', puntaje: 2, cantidad: 5},
      {letra: 'Y', puntaje: 2, cantidad: 5},
      {letra: 'Z', puntaje: 2, cantidad: 5},

    ];

    const palabra = [];

    palabra.push(letras[0],letras[1]);
    letras.splice(0, 2);
    console.log(palabra);
    console.log(letras);
    //letras.forEach(element => console.log(element));


    // let pos1 = letras[0];
    // let pos2 = letras[1];
    // let pos3 = letras[2];
    // let pos4 = letras[3];
    // let pos5 = letras[4];
    // let pos6 = letras[5];
    // let pos7 = letras[6];
    //
    // console.log(pos1, pos2, pos3, pos4, pos5, pos6, pos7);
    // const nombres = letras.map(x=> x.letra);
    // console.log(nombres);
  }
}


