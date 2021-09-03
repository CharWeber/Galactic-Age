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
    newUser.mercuryAge();
    expect(newUser.mercAge).toEqual(10)
  })

  //test #3
  test('should correctly determin age on venus {.62 earth years}', () => {
    newUser.venusAge();
    expect(newUser.venAge).toEqual(27)
  })
})