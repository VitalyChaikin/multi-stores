import { observable, decorate, action } from 'mobx'

export class ThemeStore {

  // @observable
  theme = 'light';

  // @action
  setTheme = (newTheme) => {
    this.theme = newTheme
  }
}

ThemeStore = decorate(ThemeStore, {
  theme: observable,
  setTheme: action  
});