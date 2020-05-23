import StorageService from "./storage.service";
import { StorageKeys } from "../global/interfaces";

export namespace ThemeService {


  enum ThemeClass {
    DarkTheme = 'dark-theme',
    LightTheme = 'light-theme'
  }


  const bodyRef = document.querySelector('body');


  export const init = () => {

    let currentThemeClass = getCurrentTheme();

    if (!currentThemeClass) {
      StorageService.setItem(StorageKeys.CurrentTheme, ThemeClass.LightTheme);
      currentThemeClass = ThemeClass.LightTheme;
    }

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

    if (getCurrentTheme() === ThemeClass.LightTheme) {
      bodyRef.classList.remove(ThemeClass.LightTheme);
      bodyRef.classList.add(ThemeClass.DarkTheme);
      setCurrentTheme(ThemeClass.DarkTheme);

    } else {
      bodyRef.classList.remove(ThemeClass.DarkTheme);
      bodyRef.classList.add(ThemeClass.LightTheme);
      setCurrentTheme(ThemeClass.LightTheme);
    }
  }


  const getCurrentTheme = () => {

    return StorageService.getItem(StorageKeys.CurrentTheme) as ThemeClass;
  }


  const setCurrentTheme = (themeClass: ThemeClass) => {

    StorageService.setItem(StorageKeys.CurrentTheme, themeClass);
  }

}