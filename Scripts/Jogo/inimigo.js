class Inimigo extends Animacao{
  constructor(imagem, x, y, largura, altura, pontoSpriteX, pontoSpriteY, larguraSprite, alturaSprite, larguraSpriteOriginal, velocidade){
    super(imagem, x, y, largura, altura, pontoSpriteX, pontoSpriteY, larguraSprite, alturaSprite, larguraSpriteOriginal);
    this.velocidade = velocidade;
  }
  
  move(){
    this.x -= this.velocidade;
  }
  
  reaparece(){
    this.x = width;
  }
}