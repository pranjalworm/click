export namespace ThemeService {

  enum ThemeClass {
    DarkTheme = 'dark-theme',
    LightTheme = 'light-theme'
  }

  const bodyRef = document.querySelector('body');
  let currentThemeClass: ThemeClass = ThemeClass.LightTheme;

  export const init = () => {

    bodyRef.classList.add(currentThemeClass);
    registerListener();
  }

  const registerListener = () => {

    window.addEventListener('keyup', (event: KeyboardEvent) => {

      const key = event.key;

      if (key === 'b' || key === 'B') {

        toggleTheme();
      }
    })
  }

  const toggleTheme = () => {

    if (currentThemeClass === ThemeClass.LightTheme) {
      bodyRef.classList.remove(ThemeClass.LightTheme);
      bodyRef.classList.add(ThemeClass.DarkTheme);
      currentThemeClass = ThemeClass.DarkTheme;

    } else {
      bodyRef.classList.remove(ThemeClass.DarkTheme);
      bodyRef.classList.add(ThemeClass.LightTheme);
      currentThemeClass = ThemeClass.LightTheme;
    }
  }

}