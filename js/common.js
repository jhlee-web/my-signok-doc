$(document).on('click','.modal__close-button', function(){
    $(this).parents('.modal').remove();
})

$('.tab__item').on('click',function(){
    console.log('lcicked')
    $('.tab__item').removeClass('is-active')
    $(this).addClass('is-active')
})
