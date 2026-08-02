//dropdown

document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.getElementById('dropdownBtn')
  const dropdownMenu = document.getElementById('dropdownMenu')
  const dropdownContainer = dropdownBtn.closest('.header_main--container--box--dropdown')

  dropdownBtn.addEventListener('click', (e) => {

    e.stopPropagation()

    dropdownMenu.classList.toggle('is-open')
    dropdownContainer.classList.toggle('is-active')
  })


  document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdownMenu.classList.remove('is-open')
      dropdownContainer.classList.remove('is-active')
    }
  })
})

//modal

