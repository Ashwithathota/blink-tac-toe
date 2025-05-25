const board = document.getElementById("game-board");
const turnIndicator = document.getElementById("turn-indicator");
const gameMessage = document.getElementById("game-message");
const playAgainBtn = document.getElementById("play-again");
const scoreBoard = document.getElementById("score-board");

const p1Select = document.getElementById("p1-category");
const p2Select = document.getElementById("p2-category");

const startGameBtn = document.getElementById("start-game");
const toggleHelpBtn = document.getElementById("toggle-help");
const helpBox = document.getElementById("help-info");

let players = [];
let currentPlayerIndex = 0;
let cells = Array(9).fill(null);
let roundsPlayed = 0;

const emojiSets = {
  Faces: ["😀", "😎", "😂", "😴"],
  Reactions: ["😡", "😢", "😱", "🤔"],
  Animals: ["🐶", "🐱", "🐵", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"]
};

// Play sound effect 
function playSound(type) {
  const sounds = {
    place: new Audio("place.mp3"),
    win: new Audio("win.mp3"),
    next: new Audio("next.mp3")
  };
  sounds[type]?.play();
}

// display
toggleHelpBtn.addEventListener("click", () => {
  helpBox.style.display = helpBox.style.display === "none" ? "block" : "none";
});

// Start game 
startGameBtn.addEventListener("click", () => {
  const p1Value = p1Select.value;
  const p2Value = p2Select.value;

  // Prevent same category selection
  if (p1Value === p2Value) {
    alert("Players must choose different emoji categories.");
    return;
  }

  const p1Emojis = emojiSets[p1Value];
  const p2Emojis = emojiSets[p2Value];

  players = [
    { name: "Player 1", category: p1Emojis, cells: [], score: 0 },
    { name: "Player 2", category: p2Emojis, cells: [], score: 0 }
  ];

  document.getElementById("player-select").style.display = "none";
  document.getElementById("game-area").style.display = "block";

  initBoard();
});

// reset board
function initBoard() {
  board.innerHTML = "";
  cells = Array(9).fill(null);
  players.forEach(p => p.cells = []);
  gameMessage.textContent = "";
  playAgainBtn.style.display = "none";
  turnIndicator.className = "player1";
  turnIndicator.textContent = `${players[0].name}'s Turn`;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.dataset.index = i;
    cell.addEventListener("click", () => handleMove(i));
    board.appendChild(cell);
  }
}

// Handle each move
function handleMove(index) {
  if (cells[index]) return;

  const player = players[currentPlayerIndex];
  const emoji = getRandomEmoji(player.category);

  // Enforce vanishing rule
  if (player.cells.length === 3) {
    const removedIndex = player.cells.shift();
    cells[removedIndex] = null;
    board.children[removedIndex].textContent = "";
  }

  cells[index] = emoji;
  player.cells.push(index);
  board.children[index].textContent = emoji;
  playSound("place");

  if (checkWin(player)) {
    playSound("win");
    player.score++;
    roundsPlayed++;
    gameMessage.textContent = `${player.name} Wins! 🎉`;
    updateScoreBoard();
    playAgainBtn.style.display = "inline-block";
    disableBoard();
    return;
  }

  currentPlayerIndex = 1 - currentPlayerIndex;
  turnIndicator.className = `player${currentPlayerIndex + 1}`;
  turnIndicator.textContent = `${players[currentPlayerIndex].name}'s Turn`;
}

// Random emoji picker
function getRandomEmoji(category) {
  return category[Math.floor(Math.random() * category.length)];
}

//  Check for winner
function checkWin(player) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(idx => player.cells.includes(idx))
  );
}

//  Update score display
function updateScoreBoard() {
  scoreBoard.textContent = `Player 1: ${players[0].score} | Player 2: ${players[1].score} | Rounds Played: ${roundsPlayed}`;
}

// Lock board after win
function disableBoard() {
  board.querySelectorAll("div").forEach(cell => {
    cell.style.pointerEvents = "none";
  });
}

// New round on click
playAgainBtn.addEventListener("click", () => {
  playSound("next");
  currentPlayerIndex = 0;
  initBoard();
});
