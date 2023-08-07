$(function () {
    $(".sample_btn").click(function () {
        $.ajax({
            url: 'test.html',
            type: 'GET',
            dataType: 'html'
        }).done(function (date) {
            //통신이 성공한 경우
            $(".result").html(date);
        }).fail(function (date) {
            //실패한 경우
            console.log("실페");
        })
})