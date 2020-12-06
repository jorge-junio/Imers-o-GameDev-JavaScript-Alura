class Jogo{
  constructor(){
    this.indiceAtual = 0;
    
    this.mapa = fita.mapa;
  }
  
  setup(){
    cenario = new Cenario(imagemCenario, 15);
    nuvens = new Cenario(imagemNuvens, 8);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    jogador = new Jogador(imagemPersonagem, 0, height - 200, 255, 167, 0, 0, 340, 236, 2720, somDoPulo);
    const inimigo = new Inimigo(imagemInimigo, width, height - 120, 225, 90, 0, 0, 794, 300, 1505, 50);
    const inimigoVoador = new Inimigo(imagemInimigo, width, height - 220, 225, 90, 0, 0, 794, 300, 1505, 50);
    const dinoInimigo = new Inimigo(imagemDinoInimigo, width, height - 200, 255, 167, 0, 0, 340, 236, 2720, 50);

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
    inimigos.push(dinoInimigo);

  }
  
  keyPressed(key) {
    if (key == 'ArrowUp') {
      jogador.pula();
    }
  }
  
  draw(){
    cenario.exibe();
    cenario.move();
    nuvens.exibe();
    nuvens.move();
    
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPontos();

    jogador.exibe();
    jogador.anima();
    jogador.aplicaGravidade();

    const linhaAtual = this.mapa[this.indiceAtual];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.anima();
    inimigo.move();

    if(inimigoVisivel){
      this.indiceAtual++;
      inimigo.reaparece();
      if(this.indiceAtual === this.mapa.length){
        this.indiceAtual = 0;
      }
    }

    if (jogador.estaColidindo(inimigo)) {
      vida.perdeVida();
      jogador.ficaInvencivel();
      if(vida.vidas == 0){
        image(imagemGameOver, 0, 0, width, height)
        noLoop();
      }
    }
  }
}