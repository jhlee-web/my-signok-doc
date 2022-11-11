function playTutorial(){
    $('#tutorial-wrap').show()
    $('body').css('overflow','hidden')

    const target = $('.table__tbody .table__tr')[0]
    const clientRect = window.pageYOffset + target.getBoundingClientRect().top;
    const elementHeight = $('.tutorial__box').innerHeight() * 0.25
    const absoluteTop = clientRect -  elementHeight

    $('.tutorial__area').css({
        'top':absoluteTop,
    })

    $('.tutorial__point-box').css({
        'width':target.offsetWidth,
        'height':target.offsetHeight,
        'top':clientRect
    })

    let targetIndex = 0;

    $('.tutorial__box').hide()
    $('.tutorial__box').eq(targetIndex).show()

    // 정리해야해요...
    $('.tutorial__box .button--primary').on('click',function(){
        $('.tutorial__box').eq(targetIndex).hide()

        if(targetIndex < $('.tutorial__box').length - 1){
            targetIndex = targetIndex + 1
            $('.tutorial__box').eq(targetIndex).show()
        }
        else{
            $('#tutorial-wrap').hide()
            $('body').css('overflow','unset')

            targetIndex = 0;
            return false;
        }
    })

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
        'width':window.pageXOffset + target.getBoundingClientRect().left,
        'left':0
    })

    $('.tutorial__point-box--dark[data-direction="right"]').css({
        'width':window.pageXOffset - target.offsetWidth,
        'left': target.getBoundingClientRect().right,
    })

}