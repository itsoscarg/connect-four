function ConnectFour (player1Name, player2Name) {
  this.board = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
  ];
  this.player1 = player1Name;
  this.player2 = player2Name;
  this.winner = null;
  //current player
  //50-50 chance for either player to start
  if (Math.random() < 0.5) {
  this.currentPlayer = this.player1;
  } else {
  this.currentPlayer = this.player2;
  }
}


var newConnectGame = new ConnectFour('Nizar', 'Javier');
console.log(newConnectGame);
