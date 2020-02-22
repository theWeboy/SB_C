$(function () {

    console.log('hello...');

    $("ul").each(function(){
        var $ul = $(this);
        $ul.find("li").on("click", function(){
            $ul.find(".active").removeClass("active");
            $(this).addClass("active");
        });
    });

    $("#tooltip-btn").on("click", function () {
        $("#tooltip-block").toggleClass("active");
        var el;
        el = $(this).find("span");
        if (el.hasClass("expanded")) {
            el.removeClass("expanded").addClass("collapsed");
        } else {
            el.removeClass("collapsed").addClass("expanded");
        }
        event.preventDefault();
    });



});