const span1 = document.querySelector("#player1");
const span2 = document.querySelector("#player2");
const button1 = document.querySelector("#addp1");
const button2 = document.querySelector("#addp2");
const resetButton = document.querySelector("#reset");
const scorelimit = document.querySelector("#scorelimiter");

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(scorelimit.value) || 5;

scorelimit.addEventListener("change", function () {
    winningScore = parseInt(scorelimit.value);
    resetButton.click();
});

let isGameOver = false;

but1 = button1.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        span1.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            span1.classList.add("has-text-success");
            span2.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});
but2 = button2.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        span2.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            span2.classList.add("has-text-success");
            span1.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});

resetButton.addEventListener("click", function () {
    span1.textContent = 0;
    span2.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    span1.classList.remove("has-text-success", "has-text-danger");
    span2.classList.remove("has-text-success", "has-text-danger");
    button1.disabled = false;
    button2.disabled = false;
    isGameOver = false;
});


