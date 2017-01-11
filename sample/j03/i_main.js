
(function(){
    var canvas, layer, brushC, bruchS;
    var ctx, lctx;
    var mousePosition = new Position(0, 0);
    var mDownFlag = false;
    var reset;
    var brushColor = 'red';
    var brushSize = 10;

    window.addEventListener('load', function(){
        canvas = document.getElementById('canvas');
        canvas.addEventListener('mousemove', mouseMove, false);
        canvas.addEventListener('mousedown', mouseDown, false);
        canvas.addEventListener('mouseup',mouseUp,false);
        canvas.addEventListener('init',init,false);

        // 筆の色
        brushC = document.getElementById('bColor');
        brushC.addEventListener("change",changeColor,false);

        // 筆のサイズ
        brushS = document.getElementById('bSize');
        brushS.addEventListener("change",changeSize,false);
        
        reset = document.getElementById('reset');
        reset.addEventListener('click',init,false);

        canvas.width = 700;
        canvas.height = 500;
        ctx = canvas.getContext('webgl');
        console.log(ctx);
        ctx.fillStyle = brushColor;
    }, false);

    function drawCircle(pos){
        if(!ctx){return;}
        if(mDownFlag === true){
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, brushSize, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = brushColor;
            ctx.fill();
        }
    }

    function mouseMove(eve){
        if(canvas != null){
            mousePosition.x = eve.offsetX;
            mousePosition.y = eve.offsetY;
        }
        drawCircle(mousePosition);
    }

    function mouseDown(){
        mDownFlag = true;
    }

    function mouseUp(){
        mDownFlag = false;
    }

    function changeColor(bC){
        brushColor = bC.currentTarget.value;
    }

    function changeSize(bS){
        brushSize = bS.currentTarget.value;
    }

    function init(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function Position(x, y){
        this.x = x;
        this.y = y;
    }

})();
