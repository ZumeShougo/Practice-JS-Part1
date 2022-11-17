// 変数
let pc = 'windows';

// 定数・・・ 書き換えできないようにする
const bicPc = 'mac'

//配列・・・[]を使う
let cafe = ['coffee', 'milk', 'mocca', 'latte', 'suger'];

//ループ文・・・while(条件){条件が満たされていれば実行する内容}
//let index = 0;
//while(index < cafe.length){
  //console.log(cafe[index]);
  //index++;
//}
//if else・・・if(条件){実行してほしい内容}else{満たしていない場合実行するもの}
if(cafe.length >= 5){
  console.log('OPEN');
}else{
  console.log('CLOSE');
}

//関数 test = () =>{実行してほしい処理}
let test = (arg) => {
  if(cafe.length <= arg){
    console.log('OPEN');
  }else{
    console.log('CLOSE');
  }
}

test(1);
test(3);
test(5);
test(6);