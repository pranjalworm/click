export class StorageService {

  static saveToStorage(key: string, value: any) {

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    if (typeof value === 'number') {
      value = value.toString();
    }

    localStorage.setItem(key, value);
  }

  static getFromStorage(key: string) {

    return localStorage.getItem(key);
  }
}