/* solo-supremacy-cup.js */
const leaderboardBody = document.getElementById('leaderboard-body');
const refreshSound = document.getElementById('refreshSound');


const SHEET_URL = 'https://script.google.com/macros/s/AKfycby2T4VB6M4jEbDq1-RNfq2RUiNf9VihxW1ub7uc_wbWc5I2GifgMgabJKTzimiHhPz5/exec';


async function fetchLeaderboard() {
    try {
        const res = await fetch(SHEET_URL);
        const data = await res.json();


        leaderboardBody.innerHTML = '';


        data.slice(0, 40).forEach((row, index) => {
            const div = document.createElement('div');
            div.className = 'row';
            div.innerHTML = `
            <span>#${index + 1}</span>
            <span>${row.player}</span>
            <span>${row.score}</span>
            `;
            leaderboardBody.appendChild(div);
        });


        refreshSound.play();
    } 
    catch (err) {
        console.error('Leaderboard update failed', err);
    }
}


fetchLeaderboard();
setInterval(fetchLeaderboard, 60000); // refresh every 15 seconds