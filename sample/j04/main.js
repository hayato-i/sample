
(function(){
    var canvas, layer;
    var update = false;
    var mousePosition = new Position(0, 0);

    // event ==================================================================
    window.addEventListener('load', function(){

        canvas = new Render('canvas', 700, 500);
        canvas.canvas.addEventListener('mousemove', mouseMove, false);
        layer  = new Render('layer',  700, 500);
        layer.canvas.addEventListener('mousemove', mouseMove, false);

        var count = 0;
        draw();

        function draw(){
            var v;
            count++;
            v = hsva(count, 1.0, 1.0, 1.0);

            canvas.vanish();
            canvas.setColor(v);
            if(update){canvas.drawLine(mousePosition, 30);}

            layer.clear();
            layer.setColor(v);
            layer.drawCircle(mousePosition, 15);

            update = false;
            requestAnimationFrame(draw);
        }

    }, false);

    function mouseMove(eve){
        mousePosition.px = mousePosition.x;
        mousePosition.py = mousePosition.y;
        mousePosition.x = eve.offsetX;
        mousePosition.y = eve.offsetY;
        update = true;
    }

    // Position class =========================================================
    function Position(x, y){
        this.x = x;
        this.y = y;
        this.px = x;
        this.py = y;
    }

    // Render class ===========================================================
    function Render(id, w, h){
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = w;
        this.canvas.height = h;
    }
    Render.prototype.setColor = function(v){
        var c = [];
        c[0] = parseInt(v[0] * 255);
        c[1] = parseInt(v[1] * 255);
        c[2] = parseInt(v[2] * 255);
        c[3] = parseFloat(v[3]);
        this.ctx.fillStyle = 'rgba(' + c.join(',') + ')';
        this.ctx.strokeStyle = 'rgba(' + c.join(',') + ')';
    };
    Render.prototype.clear = function(){
        if(!this.ctx){return;}
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Render.prototype.vanish = function(){
        if(!this.ctx){return;}
        var tmp = this.ctx.fillStyle;
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.fillStyle = tmp;
    };
    Render.prototype.drawCircle = function(pos, size){
        if(!this.ctx){return;}
        var r = size || 10;
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    };
    Render.prototype.drawLine = function(pos, size){
        if(!this.ctx){return;}
        var r = size || 10;
        this.ctx.lineWidth = size;
        this.ctx.beginPath();
        this.ctx.lineCap = 'round';
        this.ctx.moveTo(pos.px, pos.py);
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
    };

    // hsv color ==============================================================
    function hsva(h, s, v, a){
        var th = h % 360;
        var i = Math.floor(th / 60);
        var f = th / 60 - i;
        var m = v * (1 - s);
        var n = v * (1 - s * f);
        var k = v * (1 - s * (1 - f));
        var color = [];
        if(!s > 0 && !s < 0){
            color.push(v, v, v, a);
        }else{
            var r = [v, n, m, m, k, v];
            var g = [k, v, v, n, m, m];
            var b = [m, m, k, v, v, n];
            color.push(r[i], g[i], b[i], a);
        }
        return color;
    }
})();
