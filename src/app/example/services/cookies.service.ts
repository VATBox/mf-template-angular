import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  public static MainFilters = 'filters.main';
  public static OptionalFilters = 'filters.optional';
  public static AdditionalFilters = 'filters.additional';

  private encodeCookieData(key: string): string {
    return btoa(encodeURIComponent(key));
  }

  private decodeCookieData(key: string): any {
    return decodeURIComponent(atob(key));
  }

  public get mainFilters() {
    return this.readLocalStorage(CookiesService.MainFilters);
  }

  public get optionalFilters() {
    return this.readLocalStorage(CookiesService.OptionalFilters);
  }

  public get additionalFilters() {
    return this.readLocalStorage(CookiesService.AdditionalFilters);
  }

  public encodeCookie(cookie: any): string {
    return this.encodeCookieData(JSON.stringify(cookie));
  }

  public decodeCookie(cookie: string): any {
    return JSON.parse(this.decodeCookieData(cookie));
  }

  // noinspection JSMethodCanBeStatic
  public getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = name + '=';
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }

    return '';
  }

  // noinspection JSMethodCanBeStatic
  public deleteCookie(name: string) {
    document.cookie = `${name}=; expires=${new Date(0).toUTCString()}; path=/;`;
  }

  // noinspection JSMethodCanBeStatic
  public setCookie(name: string, value: string, expireDays: number, path = '') {
    const d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
  }

public readLocalStorage(name: string): any {
  const data = localStorage.getItem(name);
  if (data) {
    return this.decodeCookie(data);
  }
  return null;
}

  public writeLocalStorage(name: string, value: any): void {
    const encodedData = this.encodeCookie(value);
    localStorage.setItem(name, encodedData);
  }

  public removeLocalStorage(name: string): void {
    localStorage.removeItem(name);
  }
}
