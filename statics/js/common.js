$(document).on('click','.modal__close-button', function(){
    $(this).parents('.modal').remove();
})

$('.tab__item').on('click',function(){
    $('.tab__item').removeClass('is-active')
    $(this).addClass('is-active')
})

function getUrl(){
    return param = new URLSearchParams(location.search).get('page')
}

// 전체 동의
$('.checkbox-all').on('click',manageAllCheck)

function manageAllCheck(){
    if(($(this).parent() == 'li')){
        childrenCheckbox = $(this).parents('li').siblings().find('.checkbox')
    }
    else{
        childrenCheckbox = $('.checkbox')
    }
    $(this).prop('checked')==true ?
        childrenCheckbox.prop('checked',true) :
        childrenCheckbox.prop('checked',false)
   
}


/** input 입력시 값 지우기 버튼 생성 */
function checkInputLength(){
    this.value.length > 0 ?
        $(this).next('.icon').show():
        $(this).next('.icon').hide()
}

$(document).on('keyup','.input',checkInputLength)

/** remove 아이콘 클릭시 input 값 초기화
             * 아이콘에 'eye'가 있을 경우 비밀번호 토글
             * 아이콘에 'eye'가 없을 경우 input 초기화
             */
 function handlingInputType(){

    if($(this).attr('src').indexOf('eye') > -1){
        const inputType = $(this).prev('.input')

        if(inputType.attr('type') == 'password'){
            inputType.attr('type','text');
            $(this).attr('src',"/statics/icon/eye-hide-line.svg")
        }

        else{
            inputType.attr('type','password');
            $(this).attr('src',"/statics/icon/eye-show-line.svg")
        }
    }
    
    else{
        $(this).prev('.input').val('')
        $(this).hide()
    }
    
}

$(document).on('click','.input-box .icon',handlingInputType)

checkDeviceWidth()

function checkDeviceWidth(){
    let deviceWidth = $(window).innerWidth()
    
    if(deviceWidth < 768){
        // console.log('mobile')
    }
    else{
        // console.log('pc or tablet')
    }

}

$(document).on('click','.modal .tab__item',manageModalTab)

function manageModalTab(){
    $('.tab__item').removeClass('is-active')
    $(this).addClass('is-active')

    if($(this).parents('.modal').find('.modal__tab-container').length > 1){
        modalContentType = $(this).attr('data-tab')

        $('.modal__tab-container').hide();
        $(`.modal__tab-container[data-tab="${modalContentType}"]`).show()
    }
}
