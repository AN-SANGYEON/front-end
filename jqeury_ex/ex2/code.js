$(function () {
    //<ol>요소 습득
    let list = $("#list");
    //새로운 <a>요소를 추가
    let newLink = $("<a>");
    //a태그에 내용 추가
    newLink.html("developer.mozilla.org");
    //리스트 마지막에 추가
    list.append(newLink);

    //새로운 li를 만들어 a태그를 삽입
    let newItem = $("<li>");
    list.append(newItem);
    newItem.append(newLink);


    let newP = $("<p>");
    newP.html("And more...");

    //리스트 아래에 추가
    list.after(newP);

    //요소를 전부 삭제 
    //list.remove();

    //요소의 내용물을 삭재
    list.empty();

    //클릭 이벤트 js에서 onclick
    $("#button1").click(()=>{
        console.log("Hello");
    });

    //클릭 이벤트 addEvent~
    $("#button1").on("click",()=>{
        console.log("Good Bye");
    });
    $("#button1").on("click",()=>{
        console.log("Good Bye2");
    });

});