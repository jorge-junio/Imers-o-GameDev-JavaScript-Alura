class Vida{
  constructor(vidaMaxima, vidaInicial){
    this.vidaMaxima = vidaMaxima;
    this.vidaInicial = vidaInicial;
    
    this.vidas = vidaInicial;
    this.largura = 80;
    this.altura = 80;
  }
  
  draw(){
    for(let i = 0; i < this.vidas; i++){
      image(imagemVida, i * this.largura, 0, this.largura, this.altura, 0, 0, 2048, 2048);
    }
  }
  
  ganhaVida(){
    if(this.vidas < this.vidaMaxima){
       this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--;
  }
}