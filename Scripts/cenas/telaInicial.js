class TelaInicial{
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemCenario, 0, 0, width, height);
  }
  
  _texto(){
    textAlign(CENTER);
    textFont(fonteImportada);
    fill('#000');
    textSize(80);
    text('Tela Inicial', width/2, height / 8);
    textSize(50);
    text('Dino', width/2, height / 3);
    textSize(30);
    text('o fugitivo', width/2, height / 2);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}