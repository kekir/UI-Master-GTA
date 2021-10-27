// Modal LOGIN
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

export { showLogin }
