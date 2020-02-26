import { observable, decorate, action, computed } from 'mobx'

export class CounterStore {

    count = 0;

    // @action
    increment = () => {
      this.count++
    }

    // @action
    decrement = () => {
      this.count--
    }

    // @computed
    get doubleCount() {
      return this.count * 2
    }    
}

CounterStore = decorate(CounterStore, {
  count: observable,
  increment: action,
  decrement: action,
  doubleCount: computed
});
