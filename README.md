# Football-ScoreBoard-app

This application allows users to add a new game, input the teams playing, start the game, update the score, and finish the game. The application then displays the summary of all games played by total score.

## Created by

Nevena Petrović
February 2023

## Technologies Used

This app was built using the following technologies:

HTML
CSS
JavaScript
React.js

## Getting started

npm install
npm start

## How to Use the Application

1. Enter the team names in the input fields and pres 'Add Game' button.

2. The first table will show the id of a game, team names, default score (0 : 0), and buttons 'Start Game', 'Update score', and 'Finish game'.

3. The second table is Score Board which shows only team names and the score of every game (playing and/or finished).

4. Buttons 'Update score' and 'Finish game' are enabled when the button 'Start Game' is clicked.

5. Clicking on the button 'Update score' will open a modal with input fields to type a new score. If one of the input fields wasn't changed it will use the latest score of that team. If a user enters a string instead of a number there will be a message: 'Please, enter a number.'. The message will disappear when reentering the number. A user can close the modal by clicking on the button 'X' or the grey surface around the modal.

6. Button 'Finish game' will delete a game from the first table, but it will stay in the Score Board table.

7. Button 'Get Summary' is enabled when there is at least one game playing. Clicking on that button will sort the Score Board table of games by total score ( Those games with the same total score will be returned ordered by the most recently added).


