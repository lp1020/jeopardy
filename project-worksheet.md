# Project Overview

## Project Description

I made Jeopardy, which is a classic trivia game show in which players answer questions with different monetary values. If they answer the question correctly, the money is added to their bank, and if they are incorrect, it is subtracted. The player with the most money at the end of the game wins. 

## Wireframes

![img](https://git.generalassemb.ly/lp1020/project-1/blob/master/images/wireframe.JPG) 

## Game Components

### Landing Page
The player will see a form asking for their name before they move onto the main page.

### Game Initialization
Upon clicking the start button, the game board with all the categories and monetary values will be revealed. 

### Playing The Game
The  player will click on different values on the board which will display different questions pertaining to a set category. If they answer correctly, the value will be added to their bank, and if incorrect, it will be subtracted. 

### Winning The Game
The game ands when all the questions on the board have been answered. If the user has money in their bank at the end, they win, and if they are at 0 or a negative balance, they lose. 

### Game Reset
There is a "play again" button to the right of the screen. This will reload the page. 

## Functional Components

My main functions were setting the correct and incorrect answers for each question, and based on that, adding or subtracting the value from the player's bank. I looped through each possible answer for each question and said if it's been clicked and the answer is correct, add the value to their bank, otherwise, subtract it. 

Another was to set the value to a different color of it was on the plus or negative side. I added that to my main functions of the game. 

Finally, my win function checked to see how many cells in the board were clicked. I added a "clicked" class to my "cell" class once each item has been clicked, and only when the number of clicked items is equivalent to the number of cell items should the win function activate displaying either the win or lose message. 


## Libraries
 *HTML
 *CSS
 *CSS animations
 *Canvas animations
 *Vanilla Javascript
 *jQuery

## Issues and Resolutions
 I had an issue with displaying the correct color for the bank depending on the value. I fixed it by making a function outside of my main cell click function, and calling it inside each cell instead of just creating one click function inside my cell click function.
 
 Another issue I'm still trying to deal with is the win function displaying too early. I want it to display after all the cells have been clicked, but for some reason, my function stopped working after I added the rest of the cells. 

