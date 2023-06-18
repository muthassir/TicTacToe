
var board;
var playerO = "O";
var playerX = 'X';
var curPlayer = playerO;
var gameOver = false;
var click = document.getElementById("clicked");
var win = document.getElementById("winner");

window.onload = function (){
    setGame();
}

function setGame(){
    board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]
     for(let r = 0; r<3; r++){
        for(let c=0; c<3; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if(r ==0 || r == 1){
                tile.classList.add("horizontalLine")
            }
            if(c == 0 || c==1){
                tile.classList.add("verticalLine")
            }
            tile.addEventListener("click", setTile)
            document.getElementById("board").append(tile)
        }
     }
}

function setTile(){
    if(gameOver){
        return;
    }

    let cords =this.id.split("-")
    let r = parseInt(cords[0]);
    let c = parseInt(cords[1]);

    if(board[r][c] != ''){
        return;
    }

    board[r][c] = curPlayer;
    this.innerText = curPlayer;
    click.play()

    if(curPlayer == playerO){
        curPlayer = playerX
        click.play()
    }
    else{
        curPlayer = playerO
        click.play()
    }
    checkWinner();
}

function checkWinner(){
    // horizontal
    for(let r =0; r<3; r++){
        if(board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ''){
            for(let i = 0; i<3; i++){
                let tile = document.getElementById(r.toString()+"-"+i.toString());
                tile.classList.add("winner")
            }
            win.play();
            gameOver = true;
            return;
        }
    }
    // vertical
    for(let c =0; c<3; c++){
        if(board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] !=''){
            for(let i = 0; i<3; i++){
                let tile = document.getElementById(i.toString()+"-"+c.toString());
                tile.classList.add("winner")
        }
        gameOver = true;
        win.play();
            return;
    }
}

//   diagnol
  if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
    for(let i = 0; i<3; i++){
        let tile = document.getElementById(i.toString()+"-"+i.toString());
        tile.classList.add("winner")
  }
  gameOver = true;
  win.play();
  return;
  }

//   anti diagonal
if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
      let tile=document.getElementById("0-2");
      tile.classList.add("winner")

      tile=document.getElementById("1-1");
      tile.classList.add("winner")

      tile=document.getElementById("2-0");
      tile.classList.add("winner")

      gameOver=true;
      win.play();
      return;
      
}
 
}

function rstrt(){
 window.location.reload()
}