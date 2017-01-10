
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

//何回目の描画か保持する変数
var x = 0;

window.onload = function (){
    //描画回数更新
    x++;

    //テスト用関数
    //function myFunc() {alert('ckick event!');}

    //div範囲のID取得
    var element = document.getElementById('s0');
    //id = s0の挙動確認
    element.addEventListener('click', function drawCircle(eve){
        eve.textContent = "○";
    }, false);
    
    // 
    // requestAnimationFrame(function);
}
