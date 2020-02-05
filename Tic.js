console.log('TEST TEST!!');

//This object to create the players
var players = [{
        name: '',
        Counter: 0
    },
    {
        name: '',
        Counter: 0
    }
];

let count = 0; //Count the movement
let switching = 1; //this to switch the player 

$('.boardCell').on('click', twoPlayers);
function twoPlayers() {

         Pname();

    $('#right').text(players[0].name + ' : ' + players[0].Counter);
    $('#left').text(players[1].name + ' : ' + players[1].Counter);

     //check if the Cell already written  
        if ($(this).text() !== '') {
         console.log('this cell taken');
         return;
     } else {
          //player 1 turn or player 2 ??
        if (switching == 1) {
            xGame()
              //show a message 
               $('h1').text(players[1].name + ' Turn ');
               //change  css
               $(this).css({
                   'color': '#5e5e5e ',
                   'font-size': '100px'
               });
               // put it inside the Cell in the game board
               $(this).text('X');
               count++;
               checkWin('X', players[0]);
                 //change to player 2
                 switching = 0;
                  } else {
                      oGame();
                 //show a message 
                $('h1').text(players[0].name + ' Turn ');
                 $(this).css({
                     'color': 'seashell ',
                     'font-size': '80px'
                 });
                  // put it inside the Cell in the game board
                  $(this).text('O');
                  count++;
                  checkWin('O', players[1]);
                  //change to player 1
                  switching = 1;
                  }
                }
             $(this).hover(function () {
                if ($(this).text() === 'X') {
                    $(this).css("background-color", "#FFFAF0");
                } else {
                    $(this).css("background-color", "#808080"); //"#D3D3D3"
                    }
                });
                if (count >= 9) {
                    console.log("woooo");
                    $('h1').text(players[0].name + "&" + players[1].name + " : Tie");
                    tieGame();
                    init();
                }
            };
    
    //function check if win 
    function checkWin(playChar, nameOfPlayer) {
            //winning posibility 
            //   0 | 1 | 2
            //   3 | 4 | 5
            //   6 | 7 | 8
            //[0, 1, 2],[3, 4, 5],[6, 7, 8], //horizontal 
            // [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
            // [0, 4, 8], [2, 4, 6]]; //diagonal 
            //Take the value from boardCell 
             let checkValue0 = $('#cell-0').text();
             let checkValue1 = $('#cell-1').text();
             let checkValue2 = $('#cell-2').text();
             let checkValue3 = $('#cell-3').text();
             let checkValue4 = $('#cell-4').text();
             let checkValue5 = $('#cell-5').text();
             let checkValue6 = $('#cell-6').text();
             let checkValue7 = $('#cell-7').text();
             let checkValue8 = $('#cell-8').text();

             //1. check posibility
             //2.if win -> 
             //1.call initWithRounds()
         if (checkValue0 === playChar && checkValue1 === playChar && checkValue2 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            }else if (checkValue3 === playChar && checkValue4 === playChar && checkValue5 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else if (checkValue6 === playChar && checkValue7 === playChar && checkValue8 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else if (checkValue0 === playChar && checkValue3 === playChar && checkValue6 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else if (checkValue1 === playChar && checkValue4 === playChar && checkValue7 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else if (checkValue2 === playChar && checkValue5 === playChar && checkValue8 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else if (checkValue0 === playChar && checkValue4 === playChar && checkValue8 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else if (checkValue2 === playChar && checkValue4 === playChar && checkValue6 === playChar) {
             winGame();
             initWithRounds(nameOfPlayer);
            } else {
        console.log("lose");
            }
}

//this function  , Reset the board + count 'give Each cell null '(start new game whithout  player counter ).
function initWithRounds(nameOfPlayer) {
    count = 0;
    $('h1').text(nameOfPlayer.name + " : win");
    nameOfPlayer.Counter = nameOfPlayer.Counter + 1;
    $('#right').text(players[0].name + ' : ' + players[0].Counter);
    $('#left').text(players[1].name + ' : ' + players[1].Counter);
    $(".boardCell").text('');
}

//this function ,When click Reset button , Reset the board(start new game).
function init() {
    count = 0;
    players[0].Counter = 0;
    players[1].Counter = 0;
      players[0].name = '';
      players[1].name = '';
    console.log('count  :' + count);
    console.log('count 1 :' + players[0].Counter);
    console.log('count 2 :' + players[1].Counter);
    $('#right').text(players[0].name + ' : ' + players[0].Counter);
    $('#left').text(players[1].name + ' : ' + players[1].Counter);
    return $(".boardCell").text('');

}
$('#Reset').on('click', init);

// players name

  function Pname() {
    let play1 = $('#play1').val(); // player 1 
    let play2 = $('#play2').val(); // player 2

    players[0].name = play1;
    players[1].name = play2;

    if (play1 === '') {
        players[0].name = 'X';
    }
    if (play2 === '') {
        players[1].name = 'O';
    }
}
 // sounds
        function startGame() {
          $('audio#startGame')[0].play()
        };

         function winGame() {
           $('audio#Win')[0].play()
        };

         function xGame() {
           $('audio#xmov')[0].play()
        };

        function oGame() {
           $('audio#omov')[0].play()
        };

        function tieGame() {
           $('audio#tie')[0].play()
        };


