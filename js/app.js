window.onload = function() {
console.log('JS connected')

const $mainSite = $('#mainSite');
//console.log($wholeSite[0]);
const $landingSite = $('#landingSite');
//console.log($landingSite[0]);
const $submitButton = $('#submitButton');
const $nameInput = $('#nameInput');
const $resetButton = $('#resetButton');
const $bankText = $('#bankText');

$submitButton.on('click', function() {
  //console.log('button');
  document.querySelector('#landingSite').style.display = 'none';
  document.querySelector('#mainSite').style.display = 'block';
  nameInBank();
})

function nameInBank() {
  console.log('name in bank');
  $bankText.append($nameInput.val() + '\'s Bank');
  };


const $body = $('body');
const $startButton = $('button #startButton');
const $textBox = $('#textBox');
const $trebek = $('#trebek');
const $trebekTalk = $('#trebekTalk');
const $bank = $('#bank');
//Category row
const $categoryRow = $('.categoryRow');
const $category1 = $('#category1');
const $category2 = $('#category2');
const $category3 = $('#category3');
const $category4 = $('#category4');
const $category5 = $('#category5');
//Row 100
const $value1001 = $('#value1001');
const $value1002 = $('#value1002');
const $value1003 = $('#value1003');
const $value1004 = $('#value1004');
const $value1005 = $('#value1005');
//Row 200
const $value2001 = $('#value2001');
const $value2002 = $('#value2002');
const $value2003 = $('#value2003');
const $value2004 = $('#value2004');
const $value2005 = $('#value2005');
//Row 300
const $value3001 = $('#value3001');
const $value3002 = $('#value3002');
const $value3003 = $('#value3003');
const $value3004 = $('#value3004');
const $value3005 = $('#value3005');
//Row 400
const $value4001 = $('#value4001');
const $value4002 = $('#value4002');
const $value4003 = $('#value4003');
const $value4004 = $('#value4004');
const $value4005 = $('#value4005');
//Row 500
const $value5001 = $('#value5001');
const $value5002 = $('#value5002');
const $value5003 = $('#value5003');
const $value5004 = $('#value5004');
const $value5005 = $('#value5005');

const $choiceA = $('#choiceA');
const $choiceB = $('#choiceB');
const $choiceC = $('#choiceC');
const $choiceD = $('#choiceD');
const $submitChoice = $('#submitChoice');

function confetti() {
var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    var mp = 200; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 15 + 1, //radius
            d: Math.random() * mp, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
            tilt: Math.floor(Math.random() * 5) - 5
        });
    }

    //Lets draw the flakes
    function draw() {
        ctx.clearRect(0, 0, W, H);



        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color; // Green path
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
            ctx.stroke(); // Draw it
        }

        update();
    }

    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;

    function update() {
        angle += 0.01;
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;

            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0) //66.67% of the flakes
                {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt
                    };
                } else {
                    //If the flake is exitting from the right
                    if (Math.sin(angle) > 0) {
                        //Enter from the left
                        particles[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d,
                            color: p.color,
                            tilt: p.tilt
                        };
                    } else {
                        //Enter from the right
                        particles[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d,
                            color: p.color,
                            tilt: p.tilt
                        };
                    }
                }
            }
        }
    }

    //animation loop
    setInterval(draw, 20);

}



var scoreBoard = 0;




document.querySelector('#startButton').addEventListener('click', function() {
  $categoryRow.css('margin-bottom', '15px');
  $category1.text('MOVIES').css({
    'color': 'white',
    'font-family': 'Oswald',
    'font-size': '42px',
    'display': 'inline-flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'border': '1px solid gold',
    'margin-top': '15px',
  });
   $category2.text('MUSIC').css({
    'color': 'white',
    'font-family': 'Oswald',
    'font-size': '42px',
    'display': 'inline-flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'border': '1px solid gold',
    'margin-top': '15px',
    'margin-left': '-1px',
  });
    $category3.text('90s TRIVIA').css({
    'color': 'white',
    'font-family': 'Oswald',
    'font-size': '36px',
    'display': 'inline-flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'border': '1px solid gold',
    'margin-top': '15px',
    'margin-left': '3px',
    'position': 'absolute',
  });
     $category4.text('ANIMALS').css({
    'color': 'white',
    'font-family': 'Oswald',
    'font-size': '42px',
    'display': 'inline-flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'border': '1px solid gold',
    'position': 'absolute',
    'margin-top': '15px',
    'margin-left': '160px',
  });
      $category5.text('POTPOURRI').css({
    'color': 'white',
    'font-family': 'Oswald',
    'font-size': '34px',
    'position': 'absolute',
    'display': 'inline-flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'border': '1px solid gold',
    'margin-top': '15px',
    'margin-left': '317px',
  });

$value1001.text('$100').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '1px',
  'font-weight': '900',
});

$value1002.text('$100').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value1003.text('$100').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value1004.text('$100').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value1005.text('$100').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value2001.text('$200').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value2002.text('$200').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value2003.text('$200').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value2004.text('$200').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value2005.text('$200').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value3001.text('$300').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value3002.text('$300').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value3003.text('$300').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value3004.text('$300').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value3005.text('$300').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value4001.text('$400').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value4002.text('$400').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value4003.text('$400').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value4004.text('$400').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value4005.text('$400').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value5001.text('$500').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value5002.text('$500').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value5003.text('$500').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value5004.text('$500').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

$value5005.text('$500').css({
  'width': '150px',
  'height': '100px',
  'background-color': 'blue',
  'display': 'inline-flex',
  'color': 'gold',
  'font-family': 'Oswald',
  'font-size': '34px',
  'align-items': 'center',
  'justify-content': 'space-around',
  'border': '1px solid gold',
  'margin-bottom': '3px',
  'margin-left': '2px',
  'font-weight': '900',
});

const $value100 = 100;
const $value200 = 200;
const $value300 = 300;
const $value400 = 400;
const $value500 = 500;

//ROW 100
$value1001 === $value100;
$value1002 === $value100;
$value1003 === $value100;
$value1004 === $value100;
$value1005 === $value100;

//ROW 200
$value2001 === $value200;
$value2002 === $value200;
$value2003 === $value200;
$value2004 === $value200;
$value2005 === $value200;

//ROW 300
$value3001 === $value300;
$value3002 === $value300;
$value3003 === $value300;
$value3004 === $value300;
$value3005 === $value300;

//ROW 400
$value4001 === $value400;
$value4002 === $value400;
$value4003 === $value400;
$value4004 === $value400;
$value4005 === $value400;

//ROW 500
$value5001 === $value500;
$value5002 === $value500;
$value5003 === $value500;
$value5004 === $value500;
$value5005 === $value500;



//Display answers for each clue with switch statement

  //Taken partially from Stack Overflow
$('.cell').click(function() {
  event.stopPropagation()
  console.log('Clicked')

     $(this).animate({ 'zoom': 5 }, 900);
     $('.cell').click(function() {
      event.stopPropagation()
        return $(this).animate({ 'zoom': 1 }, 900);

})
})

//Display answers for each clue with switch statement
$('.cell').click(function() {
  switch ($(this).attr('id')) {
    case 'value1001':
    $('#value1001').text('This is the name of the animated science fiction comedy-drama film released in 2002 about a Hawaiian girl and her unusual pet\n \n A. What is Beauty \& the Beast?\n B. What is Lilo \& Stitch?\n C. What is The Little Mermaid?\n D. What is Moana?').css({
      'color': 'white',
      'font-family': 'Kadwa', 'sans-serif',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        console.log('submit clicked');
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
              alert('your answer is correct');
              //Score board goes up $100
              scoreBoard+=100
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            alert('your answer is incorrect')
            //Score board goes down $100
            scoreBoard-=100
            $bank.text('$' + scoreBoard)

            }
            break;

          }
        }
       })

    break;
    case 'value1002':
    $('#value1002').text('This is the name of the animated science fiction comedy-drama film released in 2002 about a Hawaiian girl and her unusual pet\n \n A. What is Beauty \& the Beast?\n B. What is Lilo \& Stitch?\n C. What is The Little Mermaid?\n D. What is Moana?').css({
      'color': 'white',
      'font-family': 'Kadwa', 'sans-serif',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        console.log('submit clicked');
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
              alert('your answer is correct');
              //Score board goes up $100
              scoreBoard+=100
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            alert('your answer is incorrect')
            //Score board goes down $100
            scoreBoard-=100
            $bank.text('$' + scoreBoard)

            }
            break;

          }
        }
       })
      break;



    default:

  }//end of switch case? I think?

//Display money value in green if on the plus side and red if at negative balance
$submitChoice.on('click', function() {
      console.log('green or red');
  if (scoreBoard > 0) {
    $bank.css('color', 'green');
  }
  if (scoreBoard === 0) {
    $bank.css('color', 'gold');
  }
 if (scoreBoard < 0) {
  $bank.css('color', 'red');
}
})
//Check to see if all clues have been clicked.
function isWinner() {
 $('.clue').addClass("clicked");
  console.log($('.clue').length)
    if ($(".clue").length == $(".clicked").length) {
      //If the scoreboard is less than or equal to 0, the player has lost
      if (scoreBoard <= 0) {
        $textBox.text('YOU HAVE LOST JEOPARDY. PLAY AGAIN!').css({
          'font-family': 'Oswald',
          'display': 'inline-flex',
          'font-size': '32px',
          'text-align': 'center',
          'align-items': 'center',
          'justify-content': 'space-around',


        });
      }
} //If the scoreboard is above 0, the player has won
     else if (scoreBoard > 0) {
      //Display the wonner text in the text box
      $textBox.text('YOU HAVE WON JEOPARDY! SCROLL UP FOR CONFETTI!').css({
        'font-family': 'Oswald',
          'display': 'inline-flex',
          'font-size': '26px',
          'text-align': 'center',
          'align-items': 'center',
          'justify-content': 'space-around',
      });
     //Cue confetti animation
      confetti();
     }


}

})//end of cell click function
// $submitChoice.on('click', function() {
//         console.log('submit clicked');
//        //let choices = $('.choiceButton')
//       })
})//closing startbutton function
// $resetButton.on('click', function()
// {   document.querySelector('#mainSite').style.display = 'none';
//     document.querySelector('#landingSite').style.display = 'block'; // restart game
// });
}//closing onload function
