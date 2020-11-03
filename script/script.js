$(document).ready(() => {
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });

    $('.header-top-nav__user').click(function(){
        $(this).toggleClass('header-invert');
        $('.user-popup').toggleClass('icon_menu-visibility');
    });

    $('.header-top-nav__cart').click(function(){
        $(this).toggleClass('header-invert');
        $('.basket-popup').toggleClass('icon_menu-visibility');
    });
    
    $('.header-top-nav__search button').click(function(){
        if( $('.header-top-nav__search').hasClass('header-top-nav__search-mobile')){
            $('.header-top-nav__search').removeClass('header-top-nav__search-mobile');
            if($(document).width() < 768) {
                setTimeout(() => {
                    $('.header-top-nav__logo').fadeIn(250);
                },250);
            }

        } else {
            if($(document).width()<768) {
                $('.header-top-nav__logo').fadeOut(250);
            }
            $('.header-top-nav__search').addClass('header-top-nav__search-mobile');
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header-top-nav__search"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div).removeClass('header-top-nav__search-mobile');
            setTimeout(() => {
                $('.header-top-nav__logo').fadeIn(250);
            },250);
        }
    });

    $('#menu__toggle').click(function(){
        $('.mobile-menu__nav').toggleClass('menu__box');
    });

    $(window).scroll(function() {
        if($(document).width() > 900) {
            if ($(document).scrollTop() >= 112) {
                $(".icon_menu").css('top', '80px');
                $(".catalog-filter").css('top', '120px');
            } else {
                $(".icon_menu").css('top', '112px');
                $(".catalog-filter").css('top', '192px');
            }
        } else {
            $(".icon_menu").css('top', '72px');
            $(".catalog-filter").css('top', '72px');
        }

        if($(document).width() > 900) {
            if ($(this).scrollTop() >= 40) {
                $(".header-top-nav").addClass("fix").css('top', '0');
                $(".header-bottom-nav").addClass("fix").css('top', '80px');
            } else {
                $(".header-top-nav").removeClass("fix");
                $(".header-bottom-nav").removeClass("fix");
            }
        } else {
            if ($(this).scrollTop() >= 72) {
                $(".header-top-nav").addClass("fix").css('top', '0');
            } else {
                $(".header-top-nav").removeClass("fix");
            }
        }
        
    });

    $(window).resize(function() {
        if($(document).width() > 900) {
            $(".mobile-menu__nav").removeClass("menu__box");
            $('#menu__toggle').prop('checked', false);
        }
        
    });


    $(window).scroll(function() {
        if($(document).width() > 900) {
            if ($(document).scrollTop() >= 112) {
                $(".icon_menu").css('top', '80px');
                $(".catalog-filter").css('top', '120px');
            } else {
                $(".icon_menu").css('top', '112px');
                $(".catalog-filter").css('top', '192px');
            }
        } else {
            $(".icon_menu").css('top', '72px');
            $(".catalog-filter").css('top', '72px');
        }

        if($(document).width() > 900) {
            if ($(this).scrollTop() >= 40) {
                $(".header-top-nav").addClass("fix").css('top', '0');
                $(".header-bottom-nav").addClass("fix").css('top', '80px');
            } else {
                $(".header-top-nav").removeClass("fix");
                $(".header-bottom-nav").removeClass("fix");
            }
        } else {
            if ($(this).scrollTop() >= 72) {
                $(".header-top-nav").addClass("fix").css('top', '0');
            } else {
                $(".header-top-nav").removeClass("fix");
            }
        }
        
    });

    $(document).click(function (e){ // событие клика по веб-документу
        let div = $(".catalog-filter"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0 && !div.is( $('.filter') ) ) { // и не по его дочерним элементам
            $(div).removeClass('catalog-filter-visibility');
        }
    });

     $('.filter').click(function(){
        let filter = $('.catalog-filter');
        if ( $(filter).hasClass("catalog-filter-visibility") ) {
            $(filter).removeClass('catalog-filter-visibility');
        } else {
             $(filter).addClass('catalog-filter-visibility');
        }
        
    });

    $('.toggle__button').click(function(){
        $(this).toggleClass('toggle__button_close');
        let id = $(this).attr('id') + "__text";
        let description = $("#" + id);
        if($(description).css("display") == "none") {
            $(description).slideDown(300);
        } else {
             $(description).slideUp(300);
        }
        
    });

    $('.size-table p').click(function(){
        $(".table__div").addClass('table__div_open');
    });


    $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $(".table__div"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div).removeClass('table__div_open');
        }
    });

});

 function hideSizeTable() {
    $(".table__div").removeClass('table__div_open');
}
