/* nightmare-duo.js */
const board = document.getElementById('leaderboard-body');
const sound = document.getElementById('refreshSound');


const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzzhcQig1yMuIUPzSm-Dv87bmgneIo6yDCkp8H26A-IVlyaS_XItpneQJajDD1-HJaofQ/exec';


async function updateLeaderboard() {
    try {
        const res = await fetch(SHEET_URL);
        const data = await res.json();

        spawnHearts();
        board.innerHTML = '';


        data.slice(0, 40).forEach((row, i) => {
            const div = document.createElement('div');
            div.className = 'row';
            div.innerHTML = `
            <span>#${i + 1}</span>
            <span>${row.player} </span>
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

/*Heart Animation (Heart Burst)*/
function spawnHearts() {
  const container = document.getElementById("heart-container");

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "\assets\screamtwerk-ghostface-meme-emoji-1400591220711096421.gif";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
} 

updateLeaderboard();
setInterval(updateLeaderboard, 60000);