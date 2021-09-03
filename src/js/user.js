export default class User {
  constructor(name, age){
    this.name = name
    this.age = parseInt(age)
  }

  mercuryCalc() {
    this.mercAge = Math.floor(this.age * 0.24);
    return this.mercAge
  }

  venusCalc() {
    this.venAge = Math.floor(this.age * 0.62);
    return this.venAge
  }
}