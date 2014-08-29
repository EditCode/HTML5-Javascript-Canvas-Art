//**FUNCTION TO CREATE OUR MASTER PIECE**//
function generateImage() {
    var mycanvas = document.getElementById("canvas1");
    var cntx;
    cntx = mycanvas.getContext('2d');
    var shape = document.getElementById("shapeType").value;
    var number = document.getElementById("shapeNumber").value;

    cntx.strokeStyle = "black";
    cntx.lineWidth = "4";

    //**LETS SEE IF ITS A CIRCLE OR SQUARE**//
    if (shape == "circle") {
        //**MUST BE A CIRCLE!**//
        for (i = 0; i < number; i++) {
            var rndX = Math.random() * mycanvas.width;
            var rndY = Math.random() * mycanvas.height;
            var rndNbrRadious = (Math.random() * 50);
            var rndColor = getRandomColor();
            cntx.fillStyle = rndColor;
            cntx.beginPath();
            cntx.arc(rndX, rndY, rndNbrRadious, 0, Math.PI * 2, true);
            cntx.closePath();
            cntx.stroke();
            cntx.fill();
        }
    }
    else
    {
        //**MUST BEA  SQUARE!**//
        for (i = 0; i < number; i++) {
            var rndX = Math.random() * mycanvas.width;
            var rndY = Math.random() * mycanvas.height;
            var rndSize = (Math.random() * 75);
            var rndColor = getRandomColor();
            cntx.beginPath();
            cntx.fillStyle = rndColor;
            cntx.rect(rndX, rndY, rndSize, rndSize);
            cntx.closePath();
            cntx.stroke();
            cntx.fill();
        }
    }
}

//**FUNCTION TO GET A RANDOM COLOR**//
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//**FUNCTION TO CLEAR THE CANVAS**//
function clearCanvas()
{
    canvas1.width = canvas1.width;
}
/**
 * Created by Admin on 4/23/2014.
 */
