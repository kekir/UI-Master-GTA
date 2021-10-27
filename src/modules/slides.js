//  SLIDER COMPONENT
const showSlides = function () {
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__go--left')
  const btnRight = document.querySelector('.slider__go--right')
  const dotContainer = document.querySelector('.dots')

  const maxSlide = slides.length
  let curSlide = 0

  // FUNCTIONS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add('dots__dot--active')
  }

  const goToSlide = function (slide) {
    // curSlide=1: -100%, 0, 100%, 200%, 300%
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
    console.log(slides)
  }

  // Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0
    } else {
      curSlide++
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  // Initialization
  const init = function () {
    goToSlide(0)
    createDots()
    activateDot(0)
  }

  init()

  // EVENT HANDLERS
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide()
    e.key === 'ArrowRight' && nextSlide() //short circuting way
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset
      goToSlide(slide)
      activateDot(slide)
    }
  })
}

export { showSlides }
