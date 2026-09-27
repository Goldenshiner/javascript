const accountId= 12345
let accountEmail= "Swarna929@gmail.com"
var accountPassword= "Swarna@123"
accountName= "Swarna"
let accountState

// accountId= 67890
accountEmail= "sonam@gmail.com"
accountPassword= "sonam@123"
accountName= "Sonam"

/* prefer not to use var as it is function scoped and can lead to unexpected behavior like can change value of all variables with same name. Use let or const instead. */

console.table([accountId, accountEmail, accountPassword, accountName, accountState])