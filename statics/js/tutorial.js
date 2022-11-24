$('#tutorial-wrap').hide()
$('#tutorial').on('click',playTutorial)

function playTutorial(){
    $('#tutorial-wrap').show()

    // 스크롤방지
    $('body').css('overflow','hidden')

    // target 어떻게할지 고민
    const target = $('.table__tbody .table__tr')[0]
    const clientRect = window.pageYOffset + target.getBoundingClientRect().top;
    const elementHeight = $('.tutorial__box').innerHeight() * 0.25
    const absoluteTop = clientRect -  elementHeight

    $('.tutorial__area').css({
        'top':absoluteTop,
    })

    // 위치
    $('.tutorial__point-box').css({
        'width':target.offsetWidth,
        'height':target.offsetHeight,
        'top':clientRect
    })

    let targetIndex = 0;

    // tutorial 상자 (내용 + 버튼) 이벤트
    $('.tutorial__box').hide()
    $('.tutorial__box').eq(targetIndex).show()

    // 다음 버튼 누른 경우
    $('.tutorial__box .button--primary').on('click',function(){
        $('.tutorial__box').eq(targetIndex).hide()

        if(targetIndex < $('.tutorial__box').length - 1){
            targetIndex = targetIndex + 1
            $('.tutorial__box').eq(targetIndex).show()
        }
        else{
            $('#tutorial-wrap').hide()
            $('body').css('overflow','unset')

            $('.tutorial__point-box').remove()
            targetIndex = 0;
            return false;
        }
    })

    // 이전 버튼 누른 경우
    $('.tutorial__box .button--outline').on('click',function(){
        $('.tutorial__box').eq(targetIndex).hide()

        if(targetIndex > 0){
            targetIndex = targetIndex - 1
            $('.tutorial__box').eq(targetIndex).show()
        }
        else{
            return false;
        }

    })

    makeTutorialDark()
}


function makeTutorialDark(){
    const target = $('.table__tbody .table__tr')[0]
    const direction = ['top','bottom','left','right']

    for(let i = 0; i < 4; i ++){
        html = ''
        html += `
            <div class = "tutorial__point-box tutorial__point-box--dark"
            data-direction = ${direction[i]}>
            </div>
        `
        $('#tutorial-wrap').append(html)
    }

    $('.tutorial__point-box--dark[data-direction="top"]').css({
        'height':window.pageYOffset + target.getBoundingClientRect().top,
        'top':0
    })
    $('.tutorial__point-box--dark[data-direction="bottom"]').css({
        'top':target.getBoundingClientRect().bottom
    })

    $('.tutorial__point-box--dark[data-direction="left"]').css({
        'width':window.pageXOffset - target.getBoundingClientRect().left,
        'left':0
    })

    $('.tutorial__point-box--dark[data-direction="right"]').css({
        'width':window.pageXOffset - target.offsetWidth,
        'left': target.getBoundingClientRect().right,
    })

}

// 배경의 검정 부분 만들기
function makeTutorialDark(){
    const target = $('.table__tbody .table__tr')[0]
    const direction = ['top','bottom','left','right']

    for(let i = 0; i < 4; i ++){
        html = ''
        html += `
            <div class = "tutorial__point-box tutorial__point-box--dark"
            data-direction = ${direction[i]}>
            </div>
        `
        $('#tutorial-wrap').append(html)
    }

    $('.tutorial__point-box--dark[data-direction="top"]').css({
        'height':window.pageYOffset + target.getBoundingClientRect().top,
    })
    $('.tutorial__point-box--dark[data-direction="bottom"]').css({
        'top':target.getBoundingClientRect().bottom
    })

    $('.tutorial__point-box--dark[data-direction="left"]').css({
        'width':window.pageXOffset + target.getBoundingClientRect().left,
    })

    $('.tutorial__point-box--dark[data-direction="right"]').css({
        'width':$(window).width() - target.getBoundingClientRect().right,
        'left':target.getBoundingClientRect().right
    })

}