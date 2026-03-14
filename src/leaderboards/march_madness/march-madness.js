/* till-elims-do-us-part.js */
const board = document.getElementById('leaderboard-body');
const sound = document.getElementById('refreshSound');


const SHEET_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AY5xjrR1g5Ec20NHrTwsLUcgmp9_Pb6RcOe7idE-O77dYwHK_HEIfgQk-n6qIYfaEL18hS0qwrnLh8QZdnTzlctzEIF6xl-xg_dNxtxozgphEOPBwQR3cvMutHRHUAZke5g6XtSuhYNkKR4UNEB6dgBuhlmKXDQv1K7bkYROQ6wH1YqtyBUQTHcrW_diCARTGE5GH6-ZQ8717PUaSjWkD_FA6KcdllPGjCczRJPKwfAagXAF2moR8jQ1BDd9Iqpa5EFTOxiHSBkEWskbhtaE7pBgMmkT6q6MqA&lib=MqESEPS2PS5A_nHw0zKJ1qcxe9KDWCxKj';


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
    heart.textContent = "🍀";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
} 

updateLeaderboard();
setInterval(updateLeaderboard, 60000);