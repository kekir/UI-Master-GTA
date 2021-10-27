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

export { showSearch }
