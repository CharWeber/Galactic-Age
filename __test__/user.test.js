import User from './../src/js/user.js'

describe("User", () => {

  let newUser;

  beforeEach(() => {
  newUser = new User("Steven", "45", "90")
  newUser.lifeExpectCalc()
  })

  // test #1
  test('should corretly generate user with age', () => {
    expect(newUser.name).toEqual('Steven')
    expect(newUser.age).toEqual(45)
  })

  //test #2
  test('should correctly determine age on mercury {.24 earth years} rounded to the nearest hundreth', () =>{
    newUser.mercuryCalc();
    expect(newUser.mercAge).toEqual(187.50)
    expect(newUser.mercYearsLeft).toEqual(187.50)
  })

  //test #3
  test('should correctly determin age on venus {.62 earth years} rounded to the nearest hundreth', () => {
    newUser.venusCalc();
    expect(newUser.venAge).toEqual(72.58)
    expect(newUser.venYearsLeft).toEqual(72.58)
  })

  // test #4
  test("should correctly determine age on mars {1.88 earth years} rounded to the nearest hundreth", () => {
    newUser.marsCalc();
    expect(newUser.marsAge).toEqual(23.94)
    expect(newUser.marsYearsLeft).toEqual(23.94)
  })

  // test #5
  test('should correctly determine age on jupiter {11.86 earth years} rounded to the nearest hundreth', () => {
    newUser.jupiterCalc();
    expect(newUser.jupiterAge).toEqual(3.79)
    expect(newUser.jupiterYearsLeft).toEqual(3.79)
  })

  //test #6
  test('should correctly determine age on saturn {29.46 earth years} rounded to the nearest hundreth', () => {
    newUser.satCalc();
    expect(newUser.satAge).toEqual(1.53)
    expect(newUser.satYearsLeft).toEqual(1.53)
  })

  //test #7 uranus 84.01
  test('should correctly determine age on Uranus {84.01 earth years} rounded to the nearest hundreth', () =>{
    newUser.uranusCalc();
    expect(newUser.uranusAge).toEqual(0.54)
    expect(newUser.uranusYearsLeft).toEqual(0.54)
  })
  //test #8 neptune 164.79
  test('should correctly determine age on neptune {164.79 earth years} rounded to the nearest hundreth', () => {
    newUser.nepCalc();
    expect(newUser.nepAge).toEqual(0.27)
    expect(newUser.nepYearsLeft).toEqual(0.27)
  })
  //test #9 pluto 248.59
  test('should correctly determine age on pluto {248.59 earth years} rounded to the nearest hundreth', () => {
    newUser.plutoCalc();
    expect(newUser.plutoAge).toEqual(0.18)
    expect(newUser.plutoYearsLeft).toEqual(0.18)
  })

  //test#10
  test('should correcty create life expect property amd days left...', () =>{
    expect(newUser.lifeExpect).toEqual(90)
    expect(newUser.yearsLeft).toEqual(45)
    expect(newUser.daysLeft).toEqual(16425)
  })

  //test#11 LIFE EXPECTANCY TESTS
  test('should correctly determine years left on mercury', () => {
    newUser.mercuryCalc();
    expect(newUser.mercYearsLeft).toEqual(187.50)
  })
})