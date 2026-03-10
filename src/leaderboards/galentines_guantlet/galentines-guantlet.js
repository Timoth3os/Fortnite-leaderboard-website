/* till-elims-do-us-part.js */
const board = document.getElementById('leaderboard-body');
const sound = document.getElementById('refreshSound');


const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzGKUcpJdGJZg_raHsAj17Dr1OP0cHu9rDs_GjgA3d48LLyQOSKPyfytHkmHg7eEec/exec';


async function updateLeaderboard() {
    try {
        const res = await fetch(SHEET_URL);
        const data = await res.json();

        /*spawnHearts();*/
        board.innerHTML = '';


        data.slice(0, 40).forEach((row, i) => {
            const div = document.createElement('div');
            div.className = 'row';
            div.innerHTML = `
            <span>#${i + 1}</span>
            <span>${row.player} & ${row.player2} </span>
            <span>${row.score}</span>
            `;
            board.appendChild(div);
        });


        sound.play();
    } 
    catch (err) {
        console.error('Update failed', err);
    }
}

/*Heart Animation (Heart Burst)
function spawnHearts() {
  const container = document.getElementById("heart-container");

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
} */

updateLeaderboard();
setInterval(updateLeaderboard, 60000);