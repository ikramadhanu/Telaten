// ======================== NAVBAR START ========================
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.nv-nav')

menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active')
    }
})
// ======================== NAVBAR END ========================