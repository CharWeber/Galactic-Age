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
  test('should correctly determine age on mercury {.24 earth years}', () =>{
    newUser.mercuryCalc();
    expect(newUser.mercAge).toEqual(10)
  })

  //test #3
  test('should correctly determin age on venus {.62 earth years}', () => {
    newUser.venusCalc();
    expect(newUser.venAge).toEqual(27)
  })

  // test #4
  test("should correctly determine age on mars {1.88 earth years}", () => {
    newUser.marsCalc();
    expect(newUser.marsAge).toEqual(84)
  })

  // test #5
  test('should correctly determine age on jupiter {11.86 earth years}', () => {
    newUser.jupiterCalc();
    expect(newUser.jupiterAge).toEqual(533)
  })

  //test #6
  test('should correctly determine age on saturn {29.46 earth years}', () => {
    newUser.satCalc();
    expect(newUser.satAge).toEqual(1325)
  })

  //test #7 uranus 84.01
  test('should correctly determine age on Uranus {84.01 earth years}', () =>{
    newUser.uranusCalc();
    expect(newUser.uranusAge).toEqual(3780)
  })
  //test #8 neptune 164.79
  test('should correctly determine age on neptune {164.79 earth years}', () => {
    newUser.nepCalc();
    expect(newUser.nepAge).toEqual(7415)
  })
  //test #9 pluto 248.59
})