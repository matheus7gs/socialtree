const themes = {
   light: {
      background: '#FAF7FD',
   },
   dark: {
      background: '#111827',
   }
}

function setTheme(newTheme) {
   const themeColors = themes[newTheme]
   
   Object.keys(themeColors).map(function(key) {
      document.body.style.setProperty(`--${key}`, themeColors[key])
   })
}

// Muadr tema manualmente
const darkModeToggle = document.querySelector('input[name=checkbox]');

darkModeToggle.addEventListener('change', function({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
});


// Muadr tema automaticamente
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function changeTheme(event) {
   if(event.matches) {
      // Tema Dark
      setTheme('dark')
      darkModeToggle.checked = true
   } else {
      // Tema light
      setTheme('light')
      darkModeToggle.checked = false
   }
}

// escutar a mudança do tema no sistema
prefersColorScheme.addEventListener('change',changeTheme)

// altera o tema de acordo o tema do usuário
changeTheme(prefersColorScheme)