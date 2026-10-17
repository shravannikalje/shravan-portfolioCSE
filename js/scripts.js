function handleThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (toggle.checked) {
    setTheme('light');
    toggle.checked = true;
  } else {
    setTheme('dark');
    toggle.checked = false;
  }
}

function setTheme(theme) {
  const toggle = document.getElementById('themeToggle');
  if (theme === 'dark') {
    document.body.classList.remove('light-mode');
    toggle.checked = false;
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light-mode');
    toggle.checked = true;
    localStorage.setItem('theme', 'light');
  }
}

function setLanguage(lang) {
  document.querySelectorAll('[lang-en], [lang-mr]').forEach(element => {
    if (lang === 'en') {
      element.textContent = element.getAttribute('lang-en') || element.textContent;
    } else if (lang === 'mr') {
      element.textContent = element.getAttribute('lang-mr') || element.textContent;
    }
  });
  localStorage.setItem('language', lang);
  updateLanguageButtons(lang);
}

function updateLanguageButtons(lang) {
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`[data-lang="${lang}"]`);
  if (btn) btn.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedLanguage = localStorage.getItem('language') || 'en';
  
  setTheme(savedTheme);
  setLanguage(savedLanguage);
});
