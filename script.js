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

const saveNameBtn = document.getElementById('save-name-btn')
const userNameInput = document.getElementById('user-name-input')
const closeButtons = document.querySelectorAll('.close-btn')

function closeModal() {
  modalOverlay.classList.add('modal_overlay--hidden')
}

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('modal_overlay--hidden')
})

saveNameBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim()

  if (name !== '') {

    openModalBtn.textContent = `Вітаємо, ${name}!`

    userNameInput.value = ''

    closeModal()
  } else {
    alert("Будь ласка, введіть своє ім'я!")
  }
})

closeButtons.forEach(btn => {
  btn.addEventListener('click', closeModal)
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalOverlay.classList.contains('modal_overlay--hidden')) {
    closeModal()
  }
})

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal()
  }
})

//year

const yearInput = document.getElementById('year-input')
const resultText = document.getElementById('year-result')
const searchBtn = document.querySelector('.main_year--container--search--box--btn')

resultText.textContent = ''

function checkLeapYear() {
  const year = parseInt(yearInput.value.trim(), 10);

  if (isNaN(year) || year <= 0) {
    resultText.textContent = 'Будь ласка, введіть коректний рік!'
    resultText.style.color = '#990000'
    return
  }


  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

  if (isLeap) {
    resultText.textContent = 'Ви народилися у високосний рік!'
    resultText.style.color = '#039900'
  } else {
    resultText.textContent = 'Ви народилися не у високосний рік!'
    resultText.style.color = '#990000'
  }
}

searchBtn.addEventListener('click', checkLeapYear)

yearInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkLeapYear()
  }
})