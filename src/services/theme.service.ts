import StorageService from "./storage.service";
import { StorageKeys } from "../global/interfaces";

export namespace ThemeService {

  export enum ThemeClass {
    DarkTheme = 'dark-theme',
    LightTheme = 'light-theme'
  }


  const bodyRef = document.querySelector('body');


  export const init = () => {

    bodyRef.classList.add(getInitTheme());
    registerListener();
  }


  const registerListener = () => {

    window.addEventListener('keyup', (event: KeyboardEvent) => {

      const key = event.key;

      if (key === 'd' || key === 'D') {

        toggleTheme();
      }
    })
  }


  export const toggleTheme = () => {

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


  const getInitTheme = () => {

    const date = new Date();
    const hour = date.getHours();

    // use dark theme during night
    if (hour === 23 || (hour >= 0 && hour <= 7)) {
      setCurrentTheme(ThemeClass.DarkTheme);
      return ThemeClass.DarkTheme;
    }

    setCurrentTheme(ThemeClass.LightTheme);
    return ThemeClass.LightTheme;
  }


  export const getCurrentTheme = () => {

    return StorageService.getItem(StorageKeys.CurrentTheme) as ThemeClass;
  }


  const setCurrentTheme = (themeClass: ThemeClass) => {

    StorageService.setItem(StorageKeys.CurrentTheme, themeClass);
  }

}