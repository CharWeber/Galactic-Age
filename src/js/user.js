export default class User {
  constructor(name, age){
    this.name = name
    this.age = parseInt(age)
    this.mercAge = 0
  }

  mercuryAge() {
    this.mercAge = Math.floor(this.age * 0.24);
    return this.mercAge
  }

  venusAge() {
    this.venAge = Math.floor(this.age * 0.62);
    return this.venAge
  }
}