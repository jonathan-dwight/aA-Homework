document.addEventListener("DOMContentLoaded", function(){
    const myCanvas = document.getElementById("mycanvas");
    myCanvas.height = 500;
    myCanvas.width = 500;

    const ctx = myCanvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 100, 400, 300)
    ctx.beginPath();
    ctx.arc(300, 250, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    draw();
    draw2();


});

function draw() {
    const canvas = document.getElementById('mycanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        
        // Cubic curves example
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
    }
}

function draw2() {
    const canvas = document.getElementById('mycanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Quadratric curves example
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }
}

// 0, 0, 66, 66, //source (x,y,w,h)