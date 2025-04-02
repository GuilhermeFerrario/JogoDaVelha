int[][] board = new int[3][3];
boolean playerTurn = true;  // Jogador começa com o 'X'
boolean gameOver = false;
int winner = 0;
color bgColor = color(240, 240, 240);
int gameMode = 1;  // 1 = Jogador vs IA, 2 = Jogador vs Jogador

void setup() {
  size(400, 400);
  resetBoard();
}

void draw() {
  background(bgColor);
  drawBoard();
  if (gameOver) {
    displayWinner();
  }
}

void mousePressed() {
  if (gameOver) {
    resetBoard();
    return;
  }
  
  // Apenas realiza a jogada se for a vez do jogador e a célula estiver vazia
  int col = mouseX / (width / 3);
  int row = mouseY / (height / 3);
  
  if (board[row][col] == 0) {
    board[row][col] = playerTurn ? 1 : -1; // Jogador faz 'X' ou 'O'
    playerTurn = !playerTurn;  // Passa a vez
    
    // Verifica o vencedor após cada jogada
    checkWinner();
    
    // Se for modo Jogador vs IA e o jogador fez a jogada, a IA joga em seguida
    if (gameMode == 1 && !playerTurn && !gameOver) {
      aiMove();
      checkWinner();
      playerTurn = true;  // Passa a vez de volta para o jogador
    }
  }
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    resetBoard();
  }
  if (key == 'm' || key == 'M') {
    // Alterna entre os modos de jogo
    gameMode = (gameMode == 1) ? 2 : 1;
    resetBoard();
  }
}

void drawBoard() {
  stroke(0);
  strokeWeight(4);
  for (int i = 1; i < 3; i++) {
    line(i * width / 3, 0, i * width / 3, height);
    line(0, i * height / 3, width, i * height / 3);
  }
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      float x = j * width / 3 + width / 6;
      float y = i * height / 3 + height / 6;
      if (board[i][j] == 1) {
        drawX(x, y);
      } else if (board[i][j] == -1) {
        drawO(x, y);
      }
    }
  }
}

void drawX(float x, float y) {
  float size = width / 6;
  stroke(255, 0, 0);
  line(x - size, y - size, x + size, y + size);
  line(x - size, y + size, x + size, y - size);
}

void drawO(float x, float y) {
  float size = width / 6;
  stroke(0, 0, 255);
  noFill();
  ellipse(x, y, size * 2, size * 2);
}

void checkWinner() {
  // Verifica as linhas e colunas
  for (int i = 0; i < 3; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != 0) {
      winner = board[i][0];
      gameOver = true;
      return;
    }
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != 0) {
      winner = board[0][i];
      gameOver = true;
      return;
    }
  }
  
  // Verifica as diagonais
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != 0) {
    winner = board[0][0];
    gameOver = true;
    return;
  }
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != 0) {
    winner = board[0][2];
    gameOver = true;
    return;
  }
  
  // Verifica se deu empate
  boolean tie = true;
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == 0) {
        tie = false;
      }
    }
  }
  if (tie) {
    winner = 2; // Empate
    gameOver = true;
  }
}

void aiMove() {
  // A IA vai tentar jogar no centro se estiver livre
  if (board[1][1] == 0) {
    board[1][1] = -1; // IA faz 'O'
    return;
  }
  
  // Caso contrário, a IA joga na primeira célula vazia
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == 0) {
        board[i][j] = -1; // IA faz 'O'
        return;
      }
    }
  }
}

void displayWinner() {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(50, 50, 50);
  if (winner == 1) {
    fill(255, 0, 0);
    text("Player Wins!", width / 2, height / 2);
  } else if (winner == -1) {
    fill(0, 0, 255);
    text("AI Wins!", width / 2, height / 2);
  } else {
    fill(0);
    text("It's a Tie!", width / 2, height / 2);
  }
  textSize(16);
  fill(0);
  text("Press 'R' to Restart", width / 2, height / 2 + 40);
  text("Press 'M' to Switch Mode", width / 2, height / 2 + 70); // Informa a troca de modo
}

void resetBoard() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      board[i][j] = 0; // Reseta o tabuleiro
    }
  }
  playerTurn = true; // Inicia com o jogador
  gameOver = false; // Jogo ainda não acabou
  winner = 0; // Nenhum vencedor
}
