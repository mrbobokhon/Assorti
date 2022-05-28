let a = document.querySelector('.navbar')
window.onscroll = (e) => {
    if (scrollY > 100) {
        a.style.position = 'fixed'
        a.style.backgroundColor = 'white'
        a.style.boxShadow = '0.3rem 0.4rem 0.5rem rgb(0,0,0,0.3)'
        document.querySelector('.navbar-hide').style.display = 'none'
        document.querySelector('.navbar-show').style.display = 'inline-block'
        document.querySelectorAll('.nav-link').forEach(a => {
            a.style.color = '#333333'
        })
    }
    else if (scrollY < 100) {
        a.style.position = 'static'
        a.style.backgroundColor = ''
        a.style.boxShadow = ''
        document.querySelector('.navbar-hide').style.display = 'inline-block'
        document.querySelector('.navbar-show').style.display = 'none'
        document.querySelectorAll('.nav-link').forEach(a => {
            a.style.color = '#fff'
        })
    }
}