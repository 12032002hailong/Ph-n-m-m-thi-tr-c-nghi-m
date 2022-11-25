const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const findScore = document.getElementById('findScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

findScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;

});

saveHighScore = e => {
    console.log("click");
    e.preventDefault();
}