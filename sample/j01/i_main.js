
/*    
    //初期化 リセット時には入力記号も削除する？
    window.onload = init(){

        //クリック回数初期化
        var clickNum = 0;
        var box = {0,0,0,0,0,0,0,0,0};

        //文字列リセット
        var i = 0;
        for(i=0;i<9;i++){

        }
    }   
*/

window.onload = function (){

    //テスト用関数
    //function myFunc() {alert('ckick event!');}
    
    //描画関数
    function drawCircle(eve){
        var newElement = document.createElement('h1');
        eve.appendChild(newElement);
        newElement.textContent = "○";
    }

    //div範囲のID取得
    var element = document.getElementById('s0');
    //id = s0の挙動確認
    element.addEventListener('click', drawCircle(element), false);
    
}

/*    
    //初期化 リセット時には入力記号も削除する？
    window.onload = init(){

        //クリック回数初期化
        var clickNum = 0;
        var box = {0,0,0,0,0,0,0,0,0};

        //文字列リセット
        var i = 0;
        for(i=0;i<9;i++){

        }
    }   
*/
