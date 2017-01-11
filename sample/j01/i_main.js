

// クリック回数保持用
var x = 0;
// 判定処理用配列
var cell = [0,0,0,0,0,0,0,0,0];
var cellId = ['s0','s1','s2','s3','s4','s5','s6','s7','s8'];

/*
function init(){
    var i = 0;
    for(i=0;i<9;i++){
        cell[i] = 0;

    }
    cellId = ['s0','s1','s2','s3','s4','s5','s6','s7','s8'];

    // ループですべてのIDの要素を消したかった

}
*/

function winJudge(){
    // ○が1列揃ったら
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
    // ×が1列揃ったら
    else if(cell[0]+cell[1]+cell[2]==-3 || 
       cell[3]+cell[4]+cell[5]==-3 ||
       cell[6]+cell[7]+cell[8]==-3 ||
       cell[0]+cell[3]+cell[6]==-3 ||
       cell[1]+cell[4]+cell[7]==-3 ||
       cell[2]+cell[5]+cell[8]==-3 ||
       cell[0]+cell[4]+cell[8]==-3 ||
       cell[2]+cell[4]+cell[6]==-3){
        alert('× is winner!');
        return;
    }
    // 全部うまったら
    else if(x==9){
        alert('draw game');
        return 1;
    }
}


// main
window.onload = function main(){

    // テスト用関数
    // function myFunc() {alert('ckick event!');}
    
    var i = 0;
    var j = 0;
    for(i=0;i<cellId.length;i++){
        // idの取得
        var element = document.getElementById(cellId[i]);
        element.addEventListener('click', function draw(eve) {
            // null かつ偶数
            if(x%2==0 && eve.currentTarget.textContent == ""){
                eve.currentTarget.textContent = "○";
                x+=1;
                // ここまでは大丈夫。
                // 判定用配列に正しく数値が追加されていないので、Idの照合する
                for(j=0;j<cellId.length;j++){
                    if(cellId[j] == eve.currentTarget.id){
                        cell[j]=1;
                    }
                }
            }
            // null かつ奇数
            else if(x%2==1 && eve.currentTarget.textContent == ""){
                eve.currentTarget.textContent = "×"
                x+=1;
                for(j=0;j<cellId.length;j++){
                    if(cellId[j] == eve.currentTarget.id){
                        cell[j]=-1;
                    }
                }
            }
            winJudge();   
        }, false);
    }
}


