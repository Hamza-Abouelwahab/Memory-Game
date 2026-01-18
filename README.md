# Memory-Game

Fruit Memory Game

Description
This is a simple memory matching game using HTML, CSS, and JavaScript. The game displays a grid of cards, each representing a fruit. Every fruit appears twice. Players click two cards at a time to reveal them. If the cards match, they stay visible; if not, they flip back. The goal is to match all the fruit pairs.

Features

Dynamic grid generated from an array of fruit names

Cards shuffled randomly at the start of each game

Smooth flip animation when cards are revealed

Match detection using data-fruit attribute

Locking mechanism to prevent flipping more than two cards at a time

Restart button to reset and shuffle the board

Feedback messages for matches or tries

How to Play

Click on a card to reveal the fruit

Click on another card to find a match

If the fruits match, they stay revealed

If not, they flip back

Continue until all pairs are matched

Click "Restart Game" to play again

File Structure

MEMORY-GAME/
├── .vscode/
├── public/
│   ├── css/
│   │   └── app.css
│   ├── images/
│   │   ├── apple.png
│   │   ├── avocado.png
│   │   ├── banana.png
│   │   ├── bg-memoryGame.jpg
│   │   ├── cherry.png
│   │   ├── grape.png
│   │   ├── orange.png
│   │   ├── pineapple.png
│   │   └── strawberry.png
│   ├── js/
│   │   └── app.js
│   ├── pages/
│   ├── index.html
│   └── README.md


Technologies Used

HTML for the structure

CSS for styling and animations

JavaScript for game logic
