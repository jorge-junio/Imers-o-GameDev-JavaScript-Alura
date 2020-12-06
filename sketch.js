function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  telaGameOver = new TelaGameOver();
  frameRate(7);
  //somDoJogo.play();
  //somDoJogo.loop();
  
  cenas = {
    jogo:jogo,
    telaInicial,
    telaGameOver
    
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2 + 50);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}