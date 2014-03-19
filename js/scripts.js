jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');



    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {           
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
        if(mywindow.scrollTop() + mywindow.height() == $(document).height()) {
            // dataslide = $(this).attr('data-slide');
            $('.navigation li[data-slide="' + 7 + '"]').addClass('active').prev().removeClass('active');
        }

    });

    function goToByScroll(dataslide) {
        if(dataslide === '1') {
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
            }, 2000, 'easeInOutQuint');
        }
        else {
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top+1
            }, 2000, 'easeInOutQuint');            
        }


    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});



//Navigation Menu, for Mobile

$(function(){
    var pull        = $('#pull');
        menu        = $('#nav');
        menuHeight  = menu.height();
        isPulled    = 0;

    $(pull).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
        isPulled = 1;
    });

    $('.nav-link').on('click', function(e){
        if(isPulled == 1){
            menu.slideToggle();
            isPulled = 0;
        }
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});