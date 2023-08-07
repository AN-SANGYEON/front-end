$(function () {
    //이 안에 jQuery를 작성
    //요소 습득
    let text = $("#text-1");
    console.log(text.html());
    //내용 변경 
    text.html("GoodBye")

    //링크
    //링크의 요소를 습득
    let link = $("#link-1");
    console.log(link.attr("href"));

    //링크 덮어쓰기
    link.attr("href","https://kinarino.jp/cat8/38722");
    link.attr("target","_blank");
    
    //css
    let texts = $(".text-class")
    texts.css("color", "blue")
    //지정해서 색깔
    texts.eq(1).css('color' ,'red');
    $(#text).css


});

