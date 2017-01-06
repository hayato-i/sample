
// 全体を無名関数で包むことによりスコープを閉じ込める
(function(){
    var cells, player, winner, noblank;
    // セル用配列, どっちのターン, 勝利者がいるか, ブランクセルがあるか

    // ロード完了と同時に呼び出す
    window.addEventListener('load', function(){
        init();
        clearCells();
    }, false);

    // ページが表示された最初の一度だけ実行される初期化関数
    function init(){
        var i, j, e;
        for(i = 0; i < 3; ++i){
            for(j = 0; j < 3; ++j){
                e = bid('td_' + i + '_' + j);
                e.addEventListener('click', cellClick, false);
            }
        }
        bid('button').addEventListener('click', clearCells, false);
    }

    // マス目、諸変数をリセットする
    function clearCells(){
        var i, j, e;
        cells = [];
        player = true;
        winner = false;
        noblank = false;
        bid('button').disabled = true;
        for(i = 0; i < 3; ++i){
            cells[i] = [];
            for(j = 0; j < 3; ++j){
                cells[i][j] = null;
                e = bid('td_' + i + '_' + j);
                e.textContent = '';
            }
        }
    }

    // マス目がクリックされた際の処理
    function cellClick(eve){
        var i, j, a;
        var ct = eve.currentTarget;
        if(winner){return;}
        bid('button').disabled = true;
        if(ct.textContent === ''){
            a = ct.id.match(/\d/g);
            if(a.length < 2){
                alert('error');
                return;
            }
            i = parseInt(a[0]);
            j = parseInt(a[1]);
            if(player){
                ct.textContent = '○';
                cells[i][j] = true;
            }else{
                ct.textContent = '×';
                cells[i][j] = false;
            }
            a = winnerCheck();
            if(a.checkmate){
                if(player){
                    alert('○ is winner!');
                }else{
                    alert('× is winner!');
                }
                winner = true;
                bid('button').disabled = false;
            }else{
                if(a.noblank){
                    alert('draw game');
                    bid('button').disabled = false;
                }
            }
            player = !player;
        }
    }

    // 勝敗判定 ※この関数はオブジェクトを戻り値として返却する
    function winnerCheck(){
        var i, j;
        var mate = false;
        var nob = true;
        for(i = 0; i < 3; ++i){
            if(cells[i][0] !== null){
                mate = mate || ((cells[i][0] === cells[i][1]) && (cells[i][0] === cells[i][2]));
            }
            if(cells[0][i] !== null){
                mate = mate || ((cells[0][i] === cells[1][i]) && (cells[0][i] === cells[2][i]));
            }
            for(j = 0; j < 3; ++j){
                nob = nob && (cells[i][j] !== null);
            }
        }
        if(cells[0][0] !== null){
            mate = mate || ((cells[0][0] === cells[1][1]) && (cells[0][0] === cells[2][2]));
        }
        if(cells[0][2] !== null){
            mate = mate || ((cells[0][2] === cells[1][1]) && (cells[0][2] === cells[2][0]));
        }
        return {checkmate: mate, noblank: nob};
    }

    // getElementById は長くてなんかいやなのでエイリアスっぽく使えるようにする
    function bid(id){
        return document.getElementById(id);
    }
})();
