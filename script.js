// tabbed menu
function openMenu(event, menuName) {
// hides all menu items
    let menuArray = document.getElementsByClassName('menu')
    for(let i = 0; i < menuArray.length; i++){
        menuArray[i].style.display = 'none' 
    }
// hides all active tab behavior
    let tablinks = document.getElementsByClassName('tablink')
    for(let i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove('active-tab')
    }
// controls behavior after user clicked; sets whichever tab needed to be active
    document.getElementById(menuName).style.display = 'block'
    event.currentTarget.classList.add('active-tab')
}

document.getElementById('mainLink').click()