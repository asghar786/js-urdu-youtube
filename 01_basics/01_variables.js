const accountId = 144553
let accountEmail = "asghar786@hotmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "asghar@wwmclt.com"
accountPassword = "212121"
accountCity = "Karachi"

/*
    Prefer not to use var
    because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])