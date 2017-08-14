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
var scoreBoard = 0;

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




document.querySelector('#startButton').addEventListener('click', function() {
  $textBox.text('"Select your answer in the box labeled ANSWER HERE on the left."').css({
    'font-family': 'Oswald',
    'display': 'inline-flex',
    'font-size': '32px',
    'text-align': 'center',
    'align-items': 'center',
    'justify-content': 'space-around',
    'font-weight': '900',
  })
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


//Display answers for each clue with switch statement
function bankColor() {
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
}






  //Taken partially from Stack Overflow
//$('.cell').on('click', function() {

     //$(this).animate({ 'zoom': 5 }, 900)
      //$('.cell').click(function() {
       //$(this).animate({ 'zoom': 1 }, 500);
      //})

//Display answers for each clue with switch statement
$value1001.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value1001').text('This is the name of the animated science fiction comedy-drama film released in 2002 about a Hawaiian girl and her unusual pet\n \n A. What is Beauty \& the Beast?\n B. What is Lilo \& Stitch?\n C. What is The Little Mermaid?\n D. What is Moana?').css({
      'color': 'white',
      'font-family': 'Kadwa',
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
              $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
              //Score board goes up $100
              scoreBoard+=100
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=100
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })


    $value1002.on('click', function() {
      $(this).animate({ 'zoom': 5 }, 900)
    $('#value1002').text('She was the first person to win "American Idol"\n \n A. Who is Carrie Underwood?\n B. Who is Jennifer Hudson?\n C. Who is Jordin Sparks?\n D. Who is Kelly Clarkson?').css({
      'color': 'white',
      'font-family': 'Kadwa',
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
            if( $choices[i].value == 'D' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=100
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=100
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })


$value1003.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value1003').text('This 90s group is the most successful girl group of all time with over 85 million records sold.\n \n A. Who are The Spice Girls?\n B. Who is Destiny\'s Child?\n C. Who is TLC?\n D. Who are The Pussycat Dolls?').css({
      'color': 'white',
      'font-family': 'Kadwa',
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
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=100
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=100
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value1004.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value1004').text('The Chihuahua is a breed of dog believed to originate from this country.\n \n A. What is Spain?\n B. What is Chile?\n C. What is Mexico?\n D. What is France?').css({
      'color': 'white',
      'font-family': 'Kadwa',
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
            //If the choice value is 'C', the answer is correct
            if( $choices[i].value == 'C' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=100
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=100
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value1005.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value1005').text('This is the most common color used in M & M candies.\n \n A. What is blue?\n B. What is brown?\n C. What is yellow?\n D. What is red?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=100
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=100
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value2001.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value2001').text('In the Star Wars universe, she is Luke Skywalker\'s mother.\n \n A. Who is Padmé Amidala?\n B. Who is Leia Organa?\n C. Who is Maz Kanata?\n D. Who is Mon Mothma?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=200
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=200
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value2002.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value2002').text('K-pop is a genre of music that originated in this country.\n \n A. What is Japan?\n B. What is Kazakhstan?\n C. What is North Korea?\n D. What is South Korea?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'D', the answer is correct
            if( $choices[i].value == 'D' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=200
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=200
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })


$value2003.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value2003').text('This basketball player was in "Space Jam."\n \n A. Who is Michael Jordan?\n B. Who is Scotty Pippen?\n C. Who is Dennis Rodman?\n D. Who is Tim Hardaway?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=200
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=200
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value2004.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value2004').text('This large mammal\'s tail is so strong it can stand on it and lift its hind legs off the ground.\n \n A. What is a Lion?\n B. What is an Elephant?\n C. What is a Kangaroo?\n D. What is a Giraffe?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'C', the answer is correct
            if( $choices[i].value == 'C' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $100
              scoreBoard+=200
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=200
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value2005.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value2005').text('When he developed his Theory of Relativity, Albert Einstein was living in this capital city.\n \n A. What is Salzburg, Austria?\n B. What is St. Petersburg, Russia?\n C. What is Berlin, Germany?\n D. What is Berne, Switzerland?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'D', the answer is correct
            if( $choices[i].value == 'D' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $200
              scoreBoard+=200
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=200
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value3001.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value3001').text('In the "Lord of the Rings" film series, this actor plays the character of Saruman.\n \n A. Who is Christopher Lee?\n B. Who is Elijah Wood?\n C. Who is Ian McKellan?\n D. Who is Orlando Bloom?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=300
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=300
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value3002.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value3002').text('This American punk rock band released their best selling album "Dookie" in 1994.\n \n A. Who is No Doubt?\n B. Who is Green Day?\n C. Who is Nirvana?\n D. Who is Sublime?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=300
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=300
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value3003.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value3003').text('Mr. Feeny was the teacher in this popular TV show.\n \n A. What is "Beverly Hills, 90210?"\n B. What is "Saved By The Bell?"\n C. What is "Fresh Prince of Bel-Air?"\n D. What is "Boy Meets World?"').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'D', the answer is correct
            if( $choices[i].value == 'D' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=300
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=300
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value3004.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value3004').text('This is the largest mammal in the world.\n \n A. What is The Polar Bear\n B. What is The Blue Whale?\n C. What is The Great White Shark?\n D. What is The Elephant').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=300
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=300
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value3005.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value3005').text('This computer game, first popular in the late 1980\'s, was advertised with the slogan, "The Jigsaw Puzzle that fights back".\n \n A. What is Pac-Man?\n B. What is Zaxxon?\n C. What is Tetris?\n D. What is Frogger?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'C' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=300
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=300
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value4001.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value4001').text('In the movie "The Wizard of Oz", the Scarecrow wanted this from the wizard.\n \n A. What is a brain?\n B. What is a heart?\n C. What is courage?\n D. What is to go home?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=400
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=400
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value4002.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value4002').text('In music theory, this is the name of the space between one musical pitch and another with double its frequency.\n \n A. What is a triad?\n B. What is tri-tone?\n C. What is an octave?\n D. What is a secondary dominant?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'C', the answer is correct
            if( $choices[i].value == 'C' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=400
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=400
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value4003.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value4003').text('This was the original flavour of the Dunkaroos cookies.\n \n A. What is Vanilla?\n B. What is Chocolate?\n C. What is Birthday Cake?\n D. What is a Cinnamon?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'D', the answer is correct
            if( $choices[i].value == 'D' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $300
              scoreBoard+=400
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $100
            scoreBoard-=400
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value4004.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value4004').text('"Murder" is the collective noun for a group of this bird.\n \n A. What are Crows?\n B. What are Flamingos?\n C. What are Pidgeons?\n D. What are Parrots?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $400
              scoreBoard+=400
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $400
            scoreBoard-=400
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value4005.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value4005').text('This is the two word name for the moment around September 21 of each year when day and night are approximately equal in length.\n \n A. What is Eternal Equinox?\n B. What is Spring Forward?\n C. What is Autumnal Equinox?\n D. What is The Equator?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'C', the answer is correct
            if( $choices[i].value == 'C' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $400
              scoreBoard+=400
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $400
            scoreBoard-=400
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value5001.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value5001').text('This actress played identical twins in the 1998 movie remake of The Parent Trap.\n \n A. Who is Hillary Duff?\n B. Who is Lindsay Lohan?\n C. Who is Miley Cyrus?\n D. Who is Melissa Joan Hart?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $500
              scoreBoard+=500
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $500
            scoreBoard-=500
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value5002.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value5002').text('He is the lead singer for the American rock band Pearl Jam.\n \n A. Who is Eddie Vedder?\n B. Who is Kurt Cobain?\n C. Who is Dave Grohl?\n D. Who is Ed Kowalczyk?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'A', the answer is correct
            if( $choices[i].value == 'A' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $500
              scoreBoard+=500
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $500
            scoreBoard-=500
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value5003.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value5003').text('This is the title of the 90s gameshow where teams competed to find lost treasures in a Mayan temple.\n \n A. What is "The Mayan Maze"?\n B. What is "Secrets of a Lost Temple"?\n C. What is "Legends of the Hidden Temple"?\n D. What is "The Goonies"?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'C', the answer is correct
            if( $choices[i].value == 'C' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $500
              scoreBoard+=500
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $500
            scoreBoard-=500
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value5004.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value5004').text('This is the world\'s most poisonous spider.\n \n A. What is the Brown Recluse?\n B. What is the Daddy-Longlegs?\n C. What is the Sydney Funnel Spider?\n D. What is the Brazilian Wandering Spider?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'D', the answer is correct
            if( $choices[i].value == 'D' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $500
              scoreBoard+=500
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $500
            scoreBoard-=500
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

$value5005.on('click', function() {
  $(this).animate({ 'zoom': 5 }, 900)
    $('#value5005').text('The bronze sculpture known as The Thinker was sculpted 1902 by this French artist.\n \n A. Who is Claude Monet?\n B. Who is Auguste Rodin?\n C. Who is Edgar Degas?\n D. Who is Vincent Van Gogh?').css({
      'color': 'white',
      'font-family': 'Kadwa',
      'font-size': '6px',
      'justify-content': 'space-around',
      'text-align': 'center',
      'white-space': 'pre-line',
    })
      //Taken partially from Stack Overflow
      //On clicking the submit choice button, loop through each choice value
       $submitChoice.on('click', function() {
        let $choices = $('.choiceButton');
        for(let i = 0; i < $choices.length; i++) {
          //If a choice has been selected...
          if ($choices[i].checked) {
            //If the choice value is 'B', the answer is correct
            if( $choices[i].value == 'B' ) {
               $textBox.text('You are correct!').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              })
              //Score board goes up $500
              scoreBoard+=500
              bankColor()
              $bank.text('$' + scoreBoard)

            }
            else {
              //Otherwise, the answer is incorrect
            $textBox.text('You are incorrect.').css({
                'font-family': 'Oswald',
                'display': 'inline-flex',
                'font-size': '32px',
                'text-align': 'center',
                'align-items': 'center',
                'justify-content': 'space-around',
                'font-weight': '900',
              });
            //Score board goes down $500
            scoreBoard-=500
            bankColor()
            $bank.text('$' + scoreBoard)

            }

          }
        }
       })
     })

 let $cell = $('.cell').click(function() {

  $(this).addClass('clicked')

  if ($('.clicked'.length) == $cell.length)  {

      //If the scoreboard is less than or equal to 0, the player has lost

      if (scoreBoard <= 0) {
        $textBox.text('YOU HAVE LOST JEOPARDY. PLAY AGAIN!').css({
          'font-family': 'Oswald',
          'display': 'inline-flex',
          'font-size': '32px',
          'text-align': 'center',
          'align-items': 'center',
          'justify-content': 'space-around',


        })

      }
} //If the scoreboard is above 0, the player has won
      if (scoreBoard > 0) {
      //Display the wonner text in the text box
      $textBox.text('YOU HAVE WON JEOPARDY! SCROLL UP FOR CONFETTI!').css({
        'font-family': 'Oswald',
          'display': 'inline-flex',
          'font-size': '26px',
          'text-align': 'center',
          'align-items': 'center',
          'justify-content': 'space-around',
      })

     //Cue confetti animation
      confetti()
     }

})

//Check to see if all clues have been clicked.

//})//end of cell click function

})//closing startbutton function

}//closing onload function
