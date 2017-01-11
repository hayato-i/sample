


function init(){
    var i = 0;
    for(i=0;i<9;i++){
        cell[i] = 0;

    }
    cellId = ['s0','s1','s2','s3','s4','s5','s6','s7','s8'];

    // ループですべてのIDの要素を消したかった

}

/*
function winJudge(){
    // 8列どこかが○だったら
    if(cell[0]+cell[1]+cell[2]==3 || 
       cell[3]+cell[4]+cell[5]==3 ||
       cell[6]+cell[7]+cell[8]==3 ||
       cell[0]+cell[3]+cell[6]==3 ||
       cell[1]+cell[4]+cell[7]==3 ||
       cell[2]+cell[5]+cell[8]==3 ||
       cell[0]+cell[4]+cell[8]==3 ||
       cell[2]+cell[4]+cell[6]==3){
        alert('○ is winner!');
        return 1;
    }
    // どこかが×だったら
    else if(){
        alert('× is winner!');
        return 1;
    }
    // 全部うまったら
    else if(x==8){
        alert('draw game');
        return 1;
    }
}
*/

// クリック回数保持用
var x = 0;
// 判定処理用配列
var cell = [0,0,0,0,0,0,0,0,0];
var cellId = ['s0','s1','s2','s3','s4','s5','s6','s7','s8'];

// main
window.onload = function main(){

    // テスト用関数
    // function myFunc() {alert('ckick event!');}


    
    var i = 0;
    for(i=0;i<cellId.length;i++){
        // idの取得
        var element = document.getElementById(cellId[i]);
        element.addEventListener('click', function draw(eve) {
            // null かつ偶数
            if(x%2==0 && eve.currentTarget.textContent == ""){
                eve.currentTarget.textContent = "○";
                x+=1;
                cell[i]=1;
            }
            // null かつ奇数
            else if(x%2==1 && eve.currentTarget.textContent == ""){
                eve.currentTarget.textContent = "×"
                x+=1;
                cell[i]=-1;
            }
            winJudge();   
        }, false);
    }
}


