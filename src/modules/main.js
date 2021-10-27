// TEST Code
export let color = 'green'

export function add(n1, n2) {
  return n1 + n2
}

// STICKY NAV SCRIPT
const stickyNav = () => {
  const header = document.querySelector('.header')
  const navHeight = nav.getBoundingClientRect().height

  const stickyNav = function (entries) {
    const [entry] = entries
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('header__sticky')
    else nav.classList.remove('header__sticky')
  }

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  })

  headerObserver.observe(header)
}

// PAGE HEADER SCRIPT
const pageHeader = () => {
  let pageTitle = document.title
  document.getElementById('title').innerHTML = pageTitle
}

// LOGIN MODAL SCRIPT
const showLogin = () => {
  const loginModal = document.querySelector('.modal-login')
  const overlay = document.querySelector('.overlay')
  const openLogin = document.querySelector('.btn--show-login')
  const closeLogin = document.querySelectorAll('.close-login')
  // const cancelLogin = document.querySelector('.btn--cancel-login')

  const openLoginModal = function (e) {
    e.preventDefault()
    loginModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

  const closeLoginModal = function () {
    loginModal.classList.add('hidden')
    overlay.classList.add('hidden')
  }

  // openLogin.forEach((btn) => btn.addEventListener('click', openLoginModal))
  openLogin.addEventListener('click', openLoginModal)
  closeLogin.forEach((btn) => btn.addEventListener('click', closeLoginModal))

  // closeLogin.addEventListener('click', closeLoginModal)
  // cancelLogin.addEventListener('click', closeLoginModal)
  overlay.addEventListener('click', closeLoginModal)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
      closeLoginModal()
    }
  })
}

// SIGNUP MODAL SCRIPT
const showSignup = () => {
  const signupModal = document.querySelector('.modal-signup')
  const signupOverlay = document.querySelector('.overlay')
  const openSignup = document.querySelector('.btn--show-signup')
  const closeSignup = document.querySelectorAll('.close-signup')
  // const cancelSignup = document.querySelectorAll('.btn--cancel-signup')

  const openSignupModal = function (e) {
    e.preventDefault()
    signupModal.classList.remove('hidden')
    signupOverlay.classList.remove('hidden')
  }

  const closeSignupModal = function () {
    signupModal.classList.add('hidden')
    signupOverlay.classList.add('hidden')
  }

  // openSignup.forEach((btn) => btn.addEventListener('click', openSignupModal))
  openSignup.addEventListener('click', openSignupModal)
  closeSignup.forEach((btn) => btn.addEventListener('click', closeSignupModal))

  // closeSignup.addEventListener('click', closeSignupModal)
  // cancelSignup.addEventListener('click', closeSignupModal)
  signupOverlay.addEventListener('click', closeSignupModal)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !signupModal.classList.contains('hidden')) {
      closeSignupModal()
    }
  })
}

// SEARCH SCRIPT
const showSearch = () => {
  let searchToggle = document.querySelector('.search__toggle')
  let searchForm = document.querySelector('.search__form')

  searchToggle.addEventListener('click', showSearch)

  function showSearch() {
    searchForm.classList.toggle('active')
    searchToggle.classList.toggle('active')

    if (searchToggle.classList.contains('active')) {
      searchToggle.setAttribute('aria-label', 'Close search')
    } else {
      searchToggle.setAttribute('aria-label', 'Open search')
    }
  }
}

const showNav = () => {
  const burger = document.querySelector('.toggler')
  const nav = document.querySelector('.prim-nav__menu')
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

export { stickyNav, pageHeader, showLogin, showSignup, showSearch, showNav }
