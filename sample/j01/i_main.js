var x = 0;

/* 初期化関数を書きたかった
var cell = [0,0,0,0,0,0,0,0,0];

function init(){
    var i = 0;
    for(i=0;i<9;i++){
        cell[i] = 0;

    }
}
*/

window.onload = function main(){

    //テスト用関数
    //function myFunc() {alert('ckick event!');}

    //偶数回のクリックは○、奇数回は×を描画
    //すでに要素があるセルには上書きできない処理をしたい
    if(x%2==0){
        //div範囲のID取得
        var element = document.getElementById('s0');
        //id = s0の挙動確認
        element.addEventListener('click', function drawCircle(eve){
            eve.currentTarget.textContent = "○";
        }, false);
        x+=1;
    }else{
        //div範囲のID取得
        var element = document.getElementById('s0');
        //id = s0の挙動確認
        element.addEventListener('click', function drawCross(eve){
            eve.currentTarget.textContent = "×";
        }, false);
        x+=1;
    }

}
