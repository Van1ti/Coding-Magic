document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    // 1. Восстанавливаем сохраненную тему при загрузке страницы
    const isDark = localStorage.getItem('theme') === 'dark';
    
    themeToggle.checked = isDark;
    document.body.classList.toggle('dark-theme', isDark);

    // 2. Переключаем тему по клику через toggle
    themeToggle.addEventListener('change', () => {
      // toggle(класс, условие): если true — добавляет класс, если false — удаляет
      const isDarkActive = document.body.classList.toggle('dark-theme', themeToggle.checked);
      
      // Сохраняем результат в localStorage
      localStorage.setItem('theme', isDarkActive ? 'dark' : 'light');
    });
  }
});