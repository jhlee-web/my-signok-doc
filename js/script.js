function checkTheme(){
    const loadedTheme = $('html').attr('data-theme')
    
    loadedTheme == undefined ? $('html').attr('data-theme','light') : $('html').attr('data-theme','dark')
}

checkTheme()

