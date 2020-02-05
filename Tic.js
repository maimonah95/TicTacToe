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

//witch between 2 pages ( play with AI or another player)
$('#switchGameAI').click(function () {
    window.location.href = 'tic.html';
});
$('#switchGame').click(function () {
    window.location.href = 'AI.html';
});

// 
$('.boardCell').on('click', twoPlayers);
function twoPlayers() {
console.log('hi 2 playe');
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
                   'color': 'black', //#5e5e5e
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
                     'color': 'black ', //seashell
                     'font-size': '90px'
                 });
                  // put it inside the Cell in the game board
                  $(this).text('O');
                  count++;
                  checkWin('O', players[1]);
                  //change to player 1
                  switching = 1;
                  }
                }
                if (count >= 9) {
                    console.log("woooo");
                    $('h1').text(players[0].name + "&" + players[1].name + " : Tie");
                    tieGame();
                    init();
                }
            };
     //
     $('.AIboardCell').on('click', AI);
    function AI() {
        Pname();
        players[1].name = 'computer';
        $('#right').text(players[0].name + ' : ' + players[0].Counter);
        $('#left').text(players[1].name + ' : ' + players[1].Counter);
        //
        if ($(this).text() !== '') {
            console.log('this cell taken');
            return;
        } else {
            $('h1').text(players[0].name + ' Turn ');
            $(this).css({
                'color': 'black ',
                'font-size': '100px'
            });
            // put it inside the Cell
            $(this).text('X');
            count++;
            //check if win
            checkWin('X', players[0]);
            
            playWithAI();
            //setTimeout(playWithAI, 500);
            count++;
            checkWin('O', players[1]);
        }

             if (count >= 9) {
                 console.log("woooo");
                 $('h1').text(players[0].name + "&" + players[1].name + " : Tie");
                 $(".boardCell").text('');
                 $(".AIboardCell").text('');
                 count = 0;
                 tieGame();
             }

    }
//1. Check the middle 
//2. Check the corner cells
//3.put it randomlly
    function playWithAI() {
        console.log('hi AI');
        let nulCell = true;
        if (document.getElementById('cell-4').innerText === '') {

            document.getElementById('cell-4').innerText = 'O';
            document.getElementById('cell-4').style.color = 'black';
            document.getElementById('cell-4').style.fontSize = '90px';

        } else if (document.getElementById('cell-0').innerText === '') {

            document.getElementById('cell-0').innerText = 'O';
            document.getElementById('cell-0').style.color = 'black';
            document.getElementById('cell-0').style.fontSize = '90px';

        } else if (document.getElementById('cell-6').innerText === '') {

            document.getElementById('cell-6').innerText = 'O';
            document.getElementById('cell-6').style.color = 'black';
            document.getElementById('cell-6').style.fontSize = '90px';

        } else if (document.getElementById('cell-2').innerText === '') {

            document.getElementById('cell-2').innerText = 'O';
            document.getElementById('cell-2').style.color = 'black';
            document.getElementById('cell-2').style.fontSize = '90px';

        } else if (document.getElementById('cell-8').innerText === '') {

            document.getElementById('cell-8').innerText = 'O';
            document.getElementById('cell-8').style.color = 'black';
            document.getElementById('cell-8').style.fontSize = '90px';

        } else {
            while (nulCell) {
                let randomPlace = Math.floor(Math.random() * 9);
                let getCell = 'cell-' + randomPlace;
                  if (document.getElementById(getCell).innerText === '') {
                      console.log('woooooo' + document.getElementById(getCell).innerText);
                      document.getElementById(getCell).innerText = 'O';
                      document.getElementById(getCell).style.color = 'black';
                      document.getElementById(getCell).style.fontSize = '90px';
                      console.log($(getCell).text());
                      nulCell = false;}
                   }
                   nulCell = true;
                   }
                   };
    //function check if player win  
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
             //2.if Condition true -> 
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
     $(".AIboardCell").text('');
}

//this function ,When click Reset button , Reset the board(start new game).
function init() {
    count = 0;
    players[0].Counter = 0;
    players[1].Counter = 0;
      players[0].name = '';
      players[1].name = '';

    $('#right').text(players[0].name + ' : ' + players[0].Counter);
    $('#left').text(players[1].name + ' : ' + players[1].Counter);
     $(".boardCell").text('');
     $(".AIboardCell").text('');

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