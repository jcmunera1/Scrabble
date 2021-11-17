//Crea clase canvas...
import {Application} from 'pixi.js';
import Layout from "./layout";

export default class Canvas {
  private app: Application;
  public layout1: Layout;

  //constructor clase, se dan los parametros para crear la app... element: donde se inserta el canvas
  constructor(
    width: number,
    height: number,
    backgroundColor: number,
    element: HTMLElement = document.body) {
    // Instanciar una nueva aplicacion de pixi
    this.app = new Application({width, height, backgroundColor});
    element.appendChild(this.app.view);
    this.layout1 = new Layout(this.app.ticker, 500, 200, 400, 150, 'Scrabble Typescript', 300);
    this.app.stage.addChild(this.layout1);

    //this.app.stage.addChild(new Rectangulo(this.app.ticker, 100, 100, 100, 100));
  }
}

