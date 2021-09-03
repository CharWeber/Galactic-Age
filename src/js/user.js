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

  marsCalc() {
    this.marsAge = Math.floor(this.age * 1.88)
    return this.marsAge
  }

  jupiterCalc() {
    this.jupiterAge = Math.floor(this.age * 11.86)
    return this.jupiterAge
  }

  satCalc() {
    this.satAge = Math.floor(this.age * 29.46)
    return this.satAge
  }

  uranusCalc() {
    this.uranusAge = Math.floor(this.age * 84.01)
    return this.uranusAge
  }
  nepCalc() {
    this.nepAge = Math.floor(this.age * 164.79)
    return this.nepAge
  }
}