class CustomSet {
  constructor() {
    this.customSet = {};
  }

  add(val) {
    this.customSet[val] = val
  }

  exisits(val) {
    return this.customSet[val] !== undefined ? true : false;
  }

  remove(val) {
    delete this.customSet[val]
  }
}
