class Animacao{
  constructor(imagem, x, y, largura, altura, pontoSpriteX, pontoSpriteY, larguraSprite, alturaSprite, larguraSpriteOriginal){
    this.imagem = imagem;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.pontoSpriteX = pontoSpriteX;
    this.pontoSpriteY = pontoSpriteY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.pontoSpriteX = 0;
    this.larguraSpriteOriginal = larguraSpriteOriginal;
  }
  
  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.pontoSpriteX, this.pontoSpriteY, this.larguraSprite, this.alturaSprite);
  }
  
  anima(){
    this.pontoSpriteX += this.larguraSprite;
    if(this.pontoSpriteX >= this.larguraSpriteOriginal){
      this.pontoSpriteX = 0;
    }
  }
}