function preload() {
  imagemCenario = loadImage('Cenario/Cenario.jpg');
  imagemNuvens = loadImage('Cenario/Nuvens.png');
  imagemTelaInicial = loadImage('Cenario/TelaInicial.jpg');
  imagemGameOver = loadImage('Cenario/GameOver.jpg');
  imagemPersonagem = loadImage('Dino/Correr.png');
  imagemInimigo = loadImage('Inimigo/Meteoro.png');
  imagemDinoInimigo = loadImage('Inimigo/DinoInimigo.png');
  imagemVida = loadImage('Cenario/Coracao.png');
  somDoJogo = loadSound('Sons/Musica1Editada - TCA.wav');
  somDoPulo = loadSound('Sons/Jump 2 - NTC.wav');
  fonteImportada = loadFont('Fonte/SundayMorning.ttf');
  fita = loadJSON('Fita/fita.json');
}