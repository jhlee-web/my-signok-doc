$(document).on('click','.modal__close-button', function(){
    $(this).parents('.modal').remove();
})
$(document).on('click','.popup__close-button', function(){
    console.log('clicked')
    $(this).parents('.popup').remove();
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

$(document).on('click','.input-box > .icon',handlingInputType)

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


// select div 수정 + 이벤트 추가
$(document).on('click','.select-box',function(){
    $(this).toggleClass('is-active')
})
$(document).on('click','.select-box__option li',function(){
    let value = $(this).text()
    $(this).parents('.select-box').find('p').text(value)
})

// accordion event
$(document).on('click','.accordion__header .icon',function(){
    let accordion = $(this).parents('.accordion');
    let accordionHeader = $(this).parents('.accordion__header')
    let accordionBody = accordionHeader.siblings('.accordion__body');
    accordionBody.height() > 1000 ? animateTime = 650 : animateTime = 500;

    if(accordionBody.height() === 0){
        autoHeightAnimate(accordionBody, animateTime);
        accordion.addClass('is-active')
    } else {
        accordionBody.stop().animate({ height: '0' }, animateTime);
        accordion.removeClass('is-active')

    }
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
    // Get Default Height
    let elementHeight = element.height();
    // Get Auto Height
    let autoHeight = element.css('height', 'auto').height(); 

    element.height(elementHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, time);
}


