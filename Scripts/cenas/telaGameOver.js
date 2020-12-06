class TelaGameOver{
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
    textSize(75);
    textAlign(CENTER);
    text('Game Over', width / 2, height / 2);
  }
  
  _botao(){
    botaoGerenciador.texto = 'Jogar Novamente';
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}