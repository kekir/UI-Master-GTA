const navSlide = () => {
  const burger = document.querySelector('.toggler')
  const nav = document.querySelector('.prim-nav__list')
  const auth = document.querySelector('.auth')
  const navLinks = document.querySelectorAll('.prim-nav__item')

  burger.addEventListener('click', (e) => {
    //Toggle Nav
    nav.classList.toggle('prim-nav-active')
    auth.classList.toggle('prim-nav-active')

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    })

    //Burger Animation
    burger.classList.toggle('anim')
  })
}

export { navSlide }
