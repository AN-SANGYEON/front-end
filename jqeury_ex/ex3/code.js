$(function(){
    //$("#text").animate({
    //    'fontSize' : '128px'
    //},2000);
    //숫자는 속도 
    
    //$("#text").animate({'left':'100%'})
    //.animate({'left':'40%'})
    //.animate({'fontSize':'68px'})
    //.animate({'left':'100%'})
    //.animate({'left':'0'})

    //$("#in").fadeIn(3000);
    //$("#out").fadeOut(3000);


    //점멸 나타났다사라졌다 
    setInterval(()=>{
        $("#toggle").fadeToggle();
    },1000);
});