
// 初期化関数でも扱えるようにグローバルスコープ
var x = 0;
// ゲーム判定処理用配列
var cell = [0,0,0,0,0,0,0,0,0];
var cellId = ['s0','s1','s2','s3','s4','s5','s6','s7','s8'];
/* 初期化関数を書きたかった
function init(){
    var i = 0;
    for(i=0;i<9;i++){
        cell[i] = 0;

    }
}

// 判定用関数
function winJudge(){
    // 8列どこかが○だったら
    if(cell[0]+cell[1]+cell[2]==3 && ){
        alert('○ is winner!');
        return 1;
    }
    // 8列どこかが×だったら
    else if(){
        alert('× is winner!');
        return 1;
    }
    // 全部うまったら
    else if(x=8){
        alert('draw game');
        return 1;
    }
}
*/

window.onload = function main(){

    //テスト用関数
    //function myFunc() {alert('ckick event!');}

    //偶数回のクリックは○、奇数回は×を描画
    //すでに要素があるセルには上書きできない処理をしたい
   
    if(x%2==0 && cell[0]==0){
        //div範囲のID取得
        var element = document.getElementById('s0');
        //id = s0の挙動確認
        element.addEventListener('click', function drawCircle(eve){
            eve.currentTarget.textContent = "○";
        }, false);
        cell[0] = 1;
        x+=1;
    }else{
        //div範囲のID取得
        var element = document.getElementById('s0');
        //id = s0の挙動確認
        element.addEventListener('click', function drawCross(eve){
            eve.currentTarget.textContent = "×";
        }, false);
        x+=1;
        cell[0] = -1;
    }

    
}
