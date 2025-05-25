# Blink Tac Toe

A fun and competitive 2-player Tic Tac Toe game with a twist — use emoji categories instead of Xs and Os, and apply a “vanishing rule” to keep the gameplay dynamic and strategic.

Built with **Vanilla JavaScript, HTML, and CSS**, the game features interactive sounds, emoji-based visuals, and responsive design.

---

### Live Demo

👉 [**Your Live Link Here**](https://Ashwithathota.github.io/blink-tac-toe)
### GitHub Repository

👉 [**GitHub Repo**](https://github.com/Ashwithathota/blink-tac-toe)

---

## Tech Stack

- **Language:** JavaScript (Vanilla)
- **Frontend:** HTML5, CSS3
- **Game Logic:** Pure JS (no frameworks)
- **Sounds:** Native JS with `.mp3` files
- **Responsive:** Optimized for mobile and desktop

---

## Emoji Categories

Each player must choose a **unique** category of emojis before the game begins:

- **Faces:** 😀 😎 😂 😴  
- **Reactions:** 😡 😢 😱 🤔  
- **Animals:** 🐶 🐱 🐵 🐰  
- **Food:** 🍕 🍟 🍔 🍩

---

## Vanishing Rule Implementation

- Players can have only **3 emojis on the board** at any time.
- On attempting to place a 4th emoji:
  - The **oldest placed emoji disappears** (FIFO logic).
  - It cannot be overwritten on the same cell immediately.
- This keeps the board dynamic and prevents draws.

---

## Sound Effects

- **Emoji Placed:** `place.mp3`  
- **Win Celebrated:** `win.mp3`  
- **Next Round Start:** `next.mp3`

---

## Features

- Category selection logic with validation (no duplicates)
- Vanishing emojis to avoid stale gameplay
- Play Again button with round tracking
- Fully responsive layout
- Scoreboard for total wins and rounds played
- Audio feedback for key actions
- Toggleable Help section to explain rules

---

## Improvements With More Time

- Add animations for emoji appearance and vanishing
- Support multiple emoji themes or custom inputs
- Add localStorage to persist scores across sessions
- Support Player Name input
- Create a “Best of N rounds” game mode
- Add optional AI for single-player mode

---

##  How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/Ashwithathota/blink-tac-toe.git
   ```
2. Open `mainpage.html` in your browser.
3. Make sure the following files exist in the root:
   - `mainpage.html`
   - `style.css`
   - `script.js`
   - `place.mp3`, `win.mp3`, `next.mp3`
