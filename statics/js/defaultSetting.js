$(function(){
    setNavAttr(navState)
    setTheme(loadedTheme)
})


// nav set
let navState = localStorage.getItem('data-fold')

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
}





// Theme Setting
let loadedTheme = localStorage.getItem('data-theme')
let currentTheme={
    'data-theme':'light',
    'toggle':0
}

function setTheme(setTheme){
    switch(setTheme){
        case undefined || null || 'null' || 'light':
            currentTheme['data-theme'] = 'light';
            currentTheme['toggle'] = 0
            break;

        case 'dark':
            currentTheme['data-theme'] = 'dark';
            currentTheme['toggle'] = 1
            break;
    }

    localStorage.setItem('data-theme',setTheme);
    $('html').attr('data-theme',currentTheme['data-theme'])
}


 

    
