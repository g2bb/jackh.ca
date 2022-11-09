var randAmt = 0.1;
function flicker() {
    randAmt = Math.random() * (0.15 - 0.00) + 0.05;
    window.document.getElementById('overblur').style.opacity = randAmt;
}

function flickrepeat() {
    setInterval(flicker, 50);
}
