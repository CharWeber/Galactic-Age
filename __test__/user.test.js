import User from './../src/js/user.js'

describe("User", () => {

  let newUser;

  beforeEach(() => {
  newUser = new User("Steven", "45")
  })

  test('should corretly generate user with age', () => {
    expect(newUser.name).toEqual('Steven')
    expect(newUser.age).toEqual(45)
  })

  test('should correctly determine age on mercury {}.24 earth years}', () =>{
    expect(newUser.mercuryAge).toEqual(10.8)
  })
})