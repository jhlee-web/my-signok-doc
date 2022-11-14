$(document).on('click','.modal__close-button',closeModal)
function closeModal(){
    console.log('clicked')
    $(this).parents('.modal').addClass('is-hide');
}