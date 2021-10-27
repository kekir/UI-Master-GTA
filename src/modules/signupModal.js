// Modal SIGNUP
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

export { showSignup }
