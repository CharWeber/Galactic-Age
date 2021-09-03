import User from './../src/js/user.js'

describe("User", () => {


  test('should corretly generate user with age', () => {
    let newUser = new User("Steven", "45")
    expect(newUser.name).toEqual('Steven')
    expect(newUser.age).toEqual(45)
  })
})