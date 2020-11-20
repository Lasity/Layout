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
    // $('.dropdown .dropdown-menu li').click(function () {
    //     $(this).parents('.dropdown').find('span').text($(this).text());
    //     $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    // });

    $(document).on('click', '.dropdown .dropdown-menu li', function (){ 
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').val($(this).attr('id')).trigger('change');
    });

    $('.header-top-nav__user').click(function(){  //открытие всплывающего окна авторизации
        if($('.user-popup').css('display') == 'none'){
            $(this).addClass('header-invert');
            $('.user-popup').slideDown(300);
        }
    });

    $(document).mouseup(function (e){ // закрытие всплывающего окна авторизации
        let div = $(".user-popup"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div).slideUp(300);
        }
        $('.header-top-nav__user').removeClass('header-invert');
    });

    $('.header-top-nav__cart').click(function(){  //открытие всплывающего окна корзины
        if($('.basket-popup').css('display') == 'none'){
            $(this).toggleClass('header-invert');
            $('.basket-popup').slideDown(300);
        }
    });

    $(document).mouseup(function (e){ // закрытие всплывающего окна корзины
        let div = $('.basket-popup'); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div).slideUp(300);
        }
        $('.header-top-nav__cart').removeClass('header-invert');
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

    $(window).scroll(function() {
        if($(document).width() > 900) {
            if ($(this).scrollTop() >= 32) {
                $(".header-top-nav").addClass("fix").css('top', '0');
                $(".header-bottom-nav").addClass("fix").css('top', '80px');
                $(".name-page__div").addClass("fix").css('top', '120px');
                if($('.name-page__div').length == 0){
                    $("main").css('padding-top', '120px');
                } else {
                    $("main").css('padding-top', '140px');
                }
                $('.icon_menu').css('top', '80px');
                $('.catalog-filter').css('top', '160px');
                $('.catalog-filter').css('height', 'calc(100vh - 160px)');
            } else {
                $(".header-top-nav").removeClass("fix");
                $(".header-bottom-nav").removeClass("fix");
                $(".name-page__div").removeClass("fix");
                $("main").css('padding-top', '0');
                $('.icon_menu').css('top', '112px');
                $('.catalog-filter').css('top', '192px');
                $('.catalog-filter').css('height', 'calc(100vh - 192px)');
            }
        } else {
            if ($(this).scrollTop() !=0) {
                $(".header-top-nav").addClass("fix").css('top', '0');
                $(".name-page__div").addClass("fix").css('top', '72px');
                if($('.name-page__div').length == 0){
                    $("main").css('padding-top', '72px');
                    $('.icon_menu').css('top', '72px');
                } else {
                    $("main").css('padding-top', '112px');
                    $('.icon_menu').css('top', '112px');
                }
                $('.catalog-filter').css('top', '112px');
            } else {
                $(".header-top-nav").removeClass("fix");
                $("name-page__div").removeClass("fix");
                if($('.name-page__div').length == 0){
                    $("main").css('padding-top', '72px');
                } else {
                    $("main").css('padding-top', '112px');
                }
            }
        }
        
    });

    $(window).resize(function() {
        if($(document).width() > 900) {
            $(".mobile-menu__nav").removeClass("menu__box");
            $('#menu__toggle').prop('checked', false);
        }
        
    });

    $('#menu__toggle').click(function(){
        $('.mobile-menu__nav').toggleClass('menu__box');
        if($('.mobile-menu__nav').hasClass('menu__box') == false) {
            $(".mobile__ul").slideUp(300);
        }
    });

    if($('.catalog-filter').length >0){
        $("#slider-range").slider({
            range: true,
            min: $("#input-hidden").attr('data-min')*1,
            max: $("#input-hidden").attr('data-max')*1,
            values: [ $("#input-hidden").attr('data-min'), $("#input-hidden").attr('data-max') ],
            slide: function( event, ui ) {
                $( "#amount1" ).val(ui.values[ 0 ] + " руб");
                $( "#amount2" ).val(ui.values[ 1 ] + " руб");
                console.log($('#input-hidden').attr('data-max'));
            }
        });
    
        $( "#amount1" ).val($( "#slider-range" ).slider( "values", 0 ) +
            " руб");
        $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ) +
            " руб ");
    }
    


    // $(document).click(function (e){ // событие клика по веб-документу
    //     let div = $(".catalog-filter"); // тут указываем ID элемента
    //     if (!div.is(e.target) && div.has(e.target).length === 0 && !div.is( $('.filter') ) ) { // и не по его дочерним элементам
    //         $(div).removeClass('catalog-filter-visibility');
    //     }
    // });



     $('.filter').click(function(){
        let filter = $('.catalog-filter');
        if ( $(filter).css('display') == 'none') {
            $(filter).slideDown(300);
            $(".filter-sorting__img").addClass('sort__img-off');
        } else {
            $(filter).slideUp(300);
            $(".filter-sorting__img").removeClass('sort__img-off');
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

    $('.size-table p').click(function(){ //открытие таблицы размеров
        $(".table__div").slideDown(300);
    });


    $(document).mouseup(function (e){ // закрытие таблицы размеров 
        let div = $(".size-table"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".table__div").slideUp();
        }
    });

    $('.history__conteiner').click(function(){
       let neighbor = $(this).siblings('.history-clothes__div');
       let child = $(this).find(".arrow_bottom");
       $(child).toggleClass("arrow_top");
       if($(neighbor).css("display") == "none") {
            $(neighbor).slideDown(300);
        } else {
             $(neighbor).slideUp(300);
        }
    });

    $('.thing__like-black').click(function(){ 
        let popup = $('.popup');
        showPopup(popup, 'Товар добавлен в избранное');
    });

    $(document).mouseup(function (e){ /// функция скрытия поп-апа при нажатии на любое место на странице
        let div = $(".popup"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div).fadeOut(300);
        }
    });

    $('.popup-close').click(function(){    // функция скрытия поп-апа при нажатии на крестик
        $(".popup").fadeOut(300);
    });

    $('.section__li').click(function(){    // функция показа и скрытия подкатегорий в мобильном меню
        if($(this).find(".mobile__ul").css("display")=='none'){
            $(this).find(".mobile__ul").slideDown(300);
        } else {
            $(this).find(".mobile__ul").slideUp(300);
        }
    });

});

function hideSizeTable() {  //закрытие таблицы размеров 
    $(".table__div").slideUp(300);
}

function showPopup(popup, content) {   
    $(popup).find('.popup_text').text(content);
    $(popup).fadeIn(300);
}

function hidePopup(popup) {
    $(popup).fadeOut(300);
}

function hideAccountLogin() {  //закрытие формы входа на странице вход или регистрация 
    $(".account-login").slideUp(300);
    $(".password-recovery").slideDown(300);
}

function hidePasswordRecovery() {  //открыие формы входа на странице вход или регистрация 
    $(".password-recovery").slideUp(300);
    $(".account-login").slideDown(300);
}

