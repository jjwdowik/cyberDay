dataslide = 1;

jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');



    slide.waypoint(function (event, direction) {


        var newTemp = dataslide;

        dataslide = $(this).attr('data-slide');


        if (direction === 'down' && dataslide!=1) {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else if(direction === 'up' && dataslide!=1) {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
        else if(dataslide == 1) {
            dataslide = newTemp;
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

    function goDownScroll(dataslide) {
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

    function goUpScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');

    }


    var tempSlide;

    links.click(function (e) {
        e.preventDefault();
        tempSlide = dataslide;
        dataslide = $(this).attr('data-slide');
        console.log(" temp " + tempSlide + " datas" + dataslide);
        if(tempSlide > dataslide) {
            //scroll up
            goUpScroll(dataslide);
        }
        else {
            goDownScroll(dataslide);
        }

    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });



    //submit form ajax stuff
    $("#contactForm").submit(function() {

        if(checkEmail()) {
            var url = "submitted.php"; // the script where you handle the form input.
            var data = {};

            data['firstname'] = $('#name').val();
            data['lastname'] = $('#lastname').val();
            data['email'] = $('#email').val(); 
            data['phone'] = $('#phone').val(); 

            $.ajax({
                   type: "POST",
                   url: url,
                   data: data, // serializes the form's elements.
                   success: function(data)
                   {
                       $('#contactForm').fadeOut("slow", function () {
                            $('#thankYou').fadeIn( 2000); 
                       });
                       
                   }
                 });

        }
        return false;
    });




});



//Navigation Menu, for Mobile

$(function(){
    var pull        = $('#pull');
        menu        = $('#nav');
        menuHeight  = menu.height();
        isPulled    = 0;

   

        $(pull).on('click', function(e){
            var wWidth = $(window).width();
            if(wWidth < 1050) {
                e.preventDefault();
                menu.slideToggle();
                isPulled = 1;
            }
        });

        $('.nav-link').on('click', function(e){
            if(isPulled == 1){
                var wWidth = $(window).width();
                if(wWidth < 1050) {
                    menu.slideToggle();
                    isPulled = 0;
                }
            }
        });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});