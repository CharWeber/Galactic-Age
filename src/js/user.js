export default class User {
  constructor(name, age, expectAge){
    this.name = name
    this.age = parseInt(age);
    this.lifeExpect = parseInt(expectAge);
  }

  // mercuryCalc() {
  //   this.mercAge = Math.round((this.age / 0.24)*100)/100;
  // }

  venusCalc() {
    this.venAge = Math.round((this.age / 0.62)*100)/100;
  }

  marsCalc() {
    this.marsAge = Math.round((this.age / 1.88)*100)/100;
  }

  jupiterCalc() {
    this.jupiterAge = Math.round((this.age / 11.86)*100)/100;
  }

  satCalc() {
    this.satAge = Math.round((this.age / 29.46)*100)/100;
  }

  uranusCalc() {
    this.uranusAge = Math.round((this.age / 84.01)*100)/100;
  }
  nepCalc() {
    this.nepAge = Math.round((this.age / 164.79)*100)/100;
  }

  plutoCalc() {
    this.plutoAge = Math.round((this.age / 248.59)*100)/100;
  }
  
  lifeExpectCalc(){
    this.yearsLeft = this.lifeExpect - this.age
    this.daysLeft = this.yearsLeft * 365
  }
}