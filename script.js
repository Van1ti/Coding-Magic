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


const openModalBtn = document.getElementById('open-modal-btn')
const modalOverlay = document.getElementById('modal_overlay')
const modal1 = document.getElementById('modal-1')
const modal2 = document.getElementById('modal-2')

const saveNameBtn = document.getElementById('save-name-btn')
const userNameInput = document.getElementById('user-name-input')
const closeButtons = document.querySelectorAll('.close-btn')


function closeModal() {
  modalOverlay.classList.add('modal_overlay--hidden')
  modal1.classList.remove('hidden')
  modal2.classList.add('hidden')
}

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('modal_overlay--hidden')
  modal1.classList.remove('hidden')
  modal2.classList.add('hidden')
})

saveNameBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim()

  if (name !== '') {

    openModalBtn.textContent = `Вітаємо, ${name}!`

    modal1.classList.add('hidden')
    modal2.classList.remove('hidden')

    userNameInput.value = ''
  } else {
    alert("Будь ласка, введіть своє ім'я!")
  }
})

closeButtons.forEach(btn => {
  btn.addEventListener('click', closeModal)
})


modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal()
  }
})
