import {Graphics, Ticker, Text} from 'pixi.js';

export default class Layout extends Graphics {
  protected _width: number;
  protected _height: number;
  protected text: Text;
  protected posText: number;
  protected nombre: string;

  constructor(ticker: Ticker, width: number, height: number, x: number, y: number, nombre: string, posText: number) {
    super();
    this.x = x;
    this.y = y;
    this._width = width;
    this._height = height;
    this.nombre = nombre;
    this.posText = posText;
    this.pivot.set(width / 2, height / 2);
    this.interactive = true;
    this.text = new Text(this.nombre, {fontFamily: 'Arial', fontSize: 32, fill: 0x000000, align: 'center'});
    this.text.position.set(this.posText, -45);
    this.addChild(this.text);
    ticker.add(()=>{
      this.dibujar();
    })
    //Conocer posX y posY del mouse
    this.on('mousemove', function (e) {
      console.log('Mouse moved');
      console.log('X', e.data.global.x, 'Y', e.data.global.y);
    });
    this.text = new Text("Scrabble Typescript")
  }

  public dibujar(){
    this.beginFill(0xfad000);
    this.drawRoundedRect(-100, 50, this._width, this._height, 15);
    this.endFill();
    this.beginFill(0x96c3eb);
    this.drawRect(-150, -50, this._width+780, this._height-150);
    this.endFill();

  }

}
