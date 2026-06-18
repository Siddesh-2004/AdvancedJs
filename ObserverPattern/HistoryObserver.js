class HistoryObserver {
  constructor() {
    this.NumberHistory = [];
  }
  update(obj) {
    this.NumberHistory.push(obj);
    for (let h of this.NumberHistory) {
      console.log(h);
    }
  }
}
