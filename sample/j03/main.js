
(function(){
    var canvas, layer;
    var ctx, lctx;
    var mousePosition = new Position(0, 0);

    window.addEventListener('load', function(){
        canvas = document.getElementById('canvas');
        canvas.addEventListener('mousemove', mouseMove, false);
        canvas.width = 700;
        canvas.height = 500;
        ctx = canvas.getContext('2d');
        console.log(ctx);

        ctx.fillStyle = 'red';
    }, false);

    function drawCircle(pos){
        if(!ctx){return;}
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    function mouseMove(eve){
        if(canvas != null){
            mousePosition.x = eve.offsetX;
            mousePosition.y = eve.offsetY;
        }
        drawCircle(mousePosition);
    }

    function Position(x, y){
        this.x = x;
        this.y = y;
    }
})();
