
//요소 습득
let text = document.getElementById("text-1");

console.log(text);
//요소 내용 습득
console.log(text.innerHTML);
//요소 내용 변경
text.innerHTML = "Hello"



//a태그의 링크 습득 id link-1
let link = document.getElementById("link-1");
console.log(link);
console.log(link.innerHTML);
//href링크 내용 자체만 습득 
console.log(link.href);

//url의 요소
link.href = "https://developer.mozilla.org";
//target_blank 를 추가
link.target = "_blank";


//클래스를 지정해서 값을 습득 하기 ex-1
let ex1 = document.getElementsByClassName("ex-1");
console.log(ex1);
console.log(ex1[0]);

//태그명을 지정해서 값을 습득하는 div
let ex2 = document.getElementsByTagName("div");
console.log(ex2[2]);