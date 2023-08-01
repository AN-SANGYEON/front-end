//ol li 정보 습득
let list = document.getElementById("list");

//새로운 요소를 작성
let newLink = document.createElement("a");
//a에 내용 추가
newLink.innerHTML = "developer.mozilla.org";

//append는 요소 안쪽 추가
//after는 요소 바깥 추가
list.append(newLink);

//새로운 <li> 를 작성
let item = document.createElement("li");
list.append(item);
item.append(newLink);

//요소를 삭제
let removeLink = document.getElementById("link-2");
//removeLink.remove();
removeLink.parentNode.remove();

/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */

// document.getElementById("button").onclick=()=>{
//   処理
// }

let btnEvent = document.getElementById("button1");
btnEvent.onclick = function(){
    console.log("ボタンをクリックした1");
}
//단점 
btnEvent.onclick = function(){
    console.log("ボタンをクリックした2");
}

/**対象の要素(버튼이벤트).addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);

btnEvent.addEventListener("click",()=>{
    console.log("ボタンクリックその3")
});

btnEvent.addEventListener("click",()=>{
    console.log("ボタンクリックその4")
});

//메소드 작성
function hello(){
    console.log("hello");
} 