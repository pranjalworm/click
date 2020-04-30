/**
 * Acts as single point proxy for SessionStorage and LocalStorage APIs
 */

import { StorageKeys } from "../global/interfaces";

export default class StorageService {

  private static localStorage = window.localStorage;
  private static sessionStorage = window.sessionStorage;

  static getItem(key: StorageKeys) {

    let value = StorageService.sessionStorage.getItem(key);

    if (value !== undefined) return value;

    return StorageService.localStorage.getItem(key);
  }


  static setItem(key: StorageKeys, value: any, persist?: boolean) {

    if (persist) {
      StorageService.localStorage.setItem(key, value);

    } else {
      StorageService.sessionStorage.setItem(key, value);
    }
  }
}