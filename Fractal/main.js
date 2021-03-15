var canvas = document.getElementById("main")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = canvas.width;
var height = canvas.height;

var ctx = canvas.getContext("2d")

var length = 2;

var turns = [2];
var pos = {
    x: 250,
    y: 250
}

var iterations = 0;

function iterate() {
    var turnsReversed = JSON.parse(JSON.stringify(turns)).reverse();

    for (let i = 0; i < turns.length; i++) {
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)

        if (turns[i] == 0) {
            pos.x = pos.x - length
        } else if (turns[i] == 1) {
            pos.y = pos.y + length
        } else if (turns[i] == 2) {
            pos.x = pos.x + length
        } else if (turns[i] == 3) {
            pos.y = pos.y - length
        }

        ctx.lineTo(pos.x, pos.y)
        ctx.stroke()

        if (turnsReversed[i] == 3) {
            turnsReversed[i] = 0
        } else {
            turnsReversed[i]++
        }
    }

    turns = turnsReversed.concat(turns)
    if (iterations == 0) {
        turns = turnsReversed
    }

    iterations++
}

document.addEventListener('click', function () {
    iterate()
})