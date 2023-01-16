jQuery(document).ready(function($){
    if($('ul.education__list').find('li').length > 3){
    $('.education__button').click(function(){
    $('ul.education__list li:nth-child(n+5)').slideToggle('');
    $(this).toggleClass('opnd_g');
    if($(this).hasClass('opnd_g')){
    $(this).html('Скрыть');}
    else {$(this).html('Смотреть все');}
    });
    }else{$('.education__button').hide();}
    });