const toggleEl = document.getElementById('toggle'),
  navbarEl = document.querySelector('.navbar')

toggleEl.addEventListener('click', (e) => navbarEl.classList.toggle('expanded'))
