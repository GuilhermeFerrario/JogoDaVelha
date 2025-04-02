# Jogo da Velha em Processing

## Descrição
Este é um simples jogo da velha implementado na linguagem Processing. Ele permite que o jogador escolha entre dois modos de jogo:
- **Modo Jogador vs IA**: O jogador joga contra uma IA simples.
- **Modo Jogador vs Jogador**: Dois jogadores se revezam para jogar no mesmo dispositivo.

## Funcionalidades
- Interface visual interativa.
- Dois modos de jogo (PvP e PvE).
- Detecção automática de vencedor ou empate.
- Opção de reiniciar o jogo a qualquer momento.

## Controles
- **Clique do Mouse**: Marca uma jogada na célula correspondente.
- **Tecla 'R'**: Reinicia o jogo.
- **Tecla 'M'**: Alterna entre os modos de jogo (Jogador vs IA ou Jogador vs Jogador).

## Regras do Jogo
1. O jogo é disputado em um tabuleiro 3x3.
2. O jogador começa jogando com o símbolo 'X'.
3. No modo contra a IA, o jogador joga primeiro e a IA responde automaticamente.
4. O jogo termina quando:
   - Um jogador forma uma linha horizontal, vertical ou diagonal com seu símbolo.
   - Todas as células são preenchidas sem um vencedor (empate).

## Implementação
O jogo foi desenvolvido utilizando a linguagem Processing. Ele utiliza:
- Um array bidimensional `int[][] board` para representar o tabuleiro.
- O loop `draw()` para atualizar graficamente o jogo.
- Eventos de mouse para registrar jogadas.
- Um sistema simples de IA que joga no centro ou na primeira célula vazia disponível.

## Como Executar
1. Instale o [Processing](https://processing.org/download/).
2. Copie e cole o código no editor do Processing.
3. Pressione "Run" para iniciar o jogo.

## Melhorias Futuras
- Implementação de uma IA mais inteligente com o algoritmo Minimax.
- Melhorias visuais e animações.
- Versão para dispositivos móveis.

## Alunos
- Guilherme Branco Ferrario - 01596391
- Eduardo Branco Ferrario - 01585198
- Thiago de Morais Gonçalves - 01609695 

Divirta-se jogando! 😃

