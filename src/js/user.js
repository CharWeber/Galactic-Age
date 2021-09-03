export default class User {
  constructor(name, age, expectAge){
    this.name = name
    this.age = parseInt(age);
    this.lifeExpect = parseInt(expectAge);
  }

  mercuryCalc() {
    this.mercAge = Math.round((this.age / 0.24)*100)/100;
    return this.mercAge
  }
  // Math.round(100*X)/100

  venusCalc() {
    this.venAge = Math.round((this.age / 0.62)*100)/100;
    return this.venAge
  }

  marsCalc() {
    this.marsAge = Math.round((this.age / 1.88)*100)/100;
    return this.marsAge
  }

  jupiterCalc() {
    this.jupiterAge = Math.round((this.age / 11.86)*100)/100;
    return this.jupiterAge
  }

  satCalc() {
    this.satAge = Math.round((this.age / 29.46)*100)/100;
    return this.satAge
  }

  uranusCalc() {
    this.uranusAge = Math.round((this.age / 84.01)*100)/100;
    return this.uranusAge
  }
  nepCalc() {
    this.nepAge = Math.round((this.age / 164.79)*100)/100;
    return this.nepAge
  }

  plutoCalc() {
    this.plutoAge = Math.round((this.age / 248.59)*100)/100;
    return this.plutoAge
  }
  
  lifeExpectCalc(){
    this.yearsLeft = this.lifeExpect - this.age
    this.daysLeft = this.yearsLeft * 365
  }
}