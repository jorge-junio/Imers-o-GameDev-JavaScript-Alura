class Jogador extends Animacao {
  constructor(imagem, x, y, largura, altura, pontoSpriteX, pontoSpriteY, larguraSprite, alturaSprite, larguraSpriteOriginal, somDoPulo) {
    super(imagem, x, y, largura, altura, pontoSpriteX, pontoSpriteY, larguraSprite, alturaSprite, larguraSpriteOriginal);

    this.yInicial = y;
    this.velocidade = 0;
    this.gravidade = 10;
    this.quantPulos = 0;
    this.invencivel = false;
  }

  pula() {
    if(this.quantPulos < 2){
      this.velocidade = -50;
      somDoPulo.play();
      this.quantPulos++;
    }
  }

  aplicaGravidade() {
    this.y += this.velocidade;
    this.velocidade += this.gravidade;

    if (this.y >= this.yInicial) {
      this.y = this.yInicial;
      this.quantPulos = 0;
    }
  }

  ficaInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel){
      return false;
    }
    
    let colisao = 0;
    const precisaoAltura = .9;
    const precisaoLargura = .4;
    noFill(); //define que vai mostrar apenas as bordas do que o rect desenhar
    //rect(this.x + 40, this.y, this.largura * precisaoLargura, this.altura * precisaoAltura); //desenha um quadrado
    
    if (inimigo.altura < 100) {
      //rect(inimigo.x + 60, inimigo.y, inimigo.largura * 0.30, inimigo.altura); //desenha um quadrado
      colisao = collideRectRect(
        this.x + 40,
        this.y,
        this.largura * precisaoLargura,
        this.altura * precisaoAltura,
        inimigo.x + 60,
        inimigo.y,
        inimigo.largura * 0.6,
        inimigo.altura);
    } else {
      //rect(inimigo.x + 160, inimigo.y +20, inimigo.largura * 0.4, inimigo.altura - 50); //desenha um quadrado
      colisao = collideRectRect(
        this.x + 40,
        this.y,
        this.largura * precisaoLargura,
        this.altura * precisaoAltura,
        inimigo.x + 160,
        inimigo.y + 20,
        inimigo.largura * 0.4,
        inimigo.altura - 50);
    }

    return colisao;
  }
}