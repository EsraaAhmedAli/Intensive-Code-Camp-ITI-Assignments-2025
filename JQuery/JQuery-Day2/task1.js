$(".run").click(function () {
    $(".div").css("position", "relative").animate({
        left: '200px',
        opacity: 0.5,
        width: 600,
        height: 120,
        fontSize:'100px',

    }, "slow");
    $(".div").css("color", "white");
});

$(".return").click(function () {
    $(".div").css("position", "relative").animate({
        color: 'white',
        width: '200px',
        height: '30px',
        opacity:1,
        // border: '2px'  'black' ' solid';
        backgroundColor: 'brown',
        left: '0px',
        fontSize:'20px',

    }, "slow");
   
});



