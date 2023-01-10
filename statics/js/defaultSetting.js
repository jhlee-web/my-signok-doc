// Theme Setting
let loadedTheme = localStorage.getItem('data-theme')

// nav set
let navState = localStorage.getItem('data-fold')

$(function(){
    setNavAttr(navState)
    setTheme(loadedTheme)
})


// nav fold set
function setNavAttr(){
    
    navState == null || navState == "false" ? localStorage.setItem('data-fold',"false") : localStorage.setItem('data-fold',"true");

    const viewportWidth = $(window).width()
    viewportWidth < 1280 ? $('html').attr('data-fold',true) : $('html').attr('data-fold',false)

    
    if(navState=='false'){
        $('html').attr('data-fold',false)
    }
    else{
        $('html').attr('data-fold',true)
    }

    $('html[data-fold="false"] .nav').css({
        'transition':0
    })

    
}

function setTheme(setTheme){
    setTheme == 'dark' ?
    $('#toggle-theme').prop('checked',true)
    :$('#toggle-theme').prop('checked',false)

    localStorage.setItem('data-theme',setTheme);
    $('html').attr('data-theme',setTheme)

}


 

    

