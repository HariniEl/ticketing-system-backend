async function storeusertoken(token, getUserFromDB, role) {
  return await client
    .db("ticket-system")
    .collection("user-token")
    .insertOne({
      usertoken: token,
      username: getUserFromDB.email,
      role: role
    });
}
async function storehelpertoken(token, getHelperFromDB, role) {
  return await client
    .db("ticket-system")
    .collection("helper-token")
    .insertOne({
      helpertoken: token,
      helpername: getHelperFromDB.helpername,
      role: role
    });
}
function storemanagertoken(token, getManagerFromDB, role) {
  return client
    .db("ticket-system")
    .collection("manager-token")
    .insertOne({
      managertoken: token,
      managername: getManagerFromDB.managername,
      role: role
    });
}
async function userfromdb(username) {
  return await client
    .db("ticket-system")
    .collection("user-signup-signin")
    .findOne({ email: username });
}
async function helperfromdb(helpername) {
  return await client
    .db("ticket-system")
    .collection("helper-signup-signin")
    .findOne({ helpername: helpername });
}
async function managerfromdb(managername) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .findOne({ managername: managername });
}