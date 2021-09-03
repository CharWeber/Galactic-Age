import User from './../src/js/user.js'

describe("User", () => {

  let newUser;

  beforeEach(() => {
  newUser = new User("Steven", "45")
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
  })

  //test #3
  test('should correctly determin age on venus {.62 earth years} rounded to the nearest hundreth', () => {
    newUser.venusCalc();
    expect(newUser.venAge).toEqual(72.58)
  })

  // test #4
  test("should correctly determine age on mars {1.88 earth years} rounded to the nearest hundreth", () => {
    newUser.marsCalc();
    expect(newUser.marsAge).toEqual(23.94)
  })

  // test #5
  test('should correctly determine age on jupiter {11.86 earth years} rounded to the nearest hundreth', () => {
    newUser.jupiterCalc();
    expect(newUser.jupiterAge).toEqual(3.79)
  })

  //test #6
  test('should correctly determine age on saturn {29.46 earth years} rounded to the nearest hundreth', () => {
    newUser.satCalc();
    expect(newUser.satAge).toEqual(1.53)
  })

  //test #7 uranus 84.01
  test('should correctly determine age on Uranus {84.01 earth years} rounded to the nearest hundreth', () =>{
    newUser.uranusCalc();
    expect(newUser.uranusAge).toEqual(3780)
  })
  //test #8 neptune 164.79
  test('should correctly determine age on neptune {164.79 earth years} rounded to the nearest hundreth', () => {
    newUser.nepCalc();
    expect(newUser.nepAge).toEqual(7415)
  })
  //test #9 pluto 248.59
  test('should correctly determine age on pluto {248.59 earth years} rounded to the nearest hundreth', () => {
    newUser.plutoCalc();
    expect(newUser.plutoAge).toEqual(11186)
  })
})