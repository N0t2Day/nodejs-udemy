const { myName, myHobbies } = require('./multiple-exports')
const myFriendsName = 'Alice'

module.exports.myName = myName
module.exports.myFriendsName = myFriendsName

// Property names could be different
module.exports.myGreatHobbies = myHobbies
