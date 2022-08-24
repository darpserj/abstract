const navHamburger = document.getElementsByClassName('nav-hamburger')[0]
const navList = document.getElementsByClassName('nav-list')[0]

navHamburger.addEventListener('click', () => {
    navList.classList.toggle('active')
})
