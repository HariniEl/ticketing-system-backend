

async function getingqueryofuser() {
  return await client
    .db("ticket-system")
    .collection("user-signup-signin")
    .find()
    .toArray();
}
async function getingquerysofmanager() {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .find()
    .toArray();
}
async function getingquerys() {
  return await client
    .db("ticket-system")
    .collection("helper-signup-signin")
    .find()
    .toArray();
}
async function getingquery() {
  return await client
    .db("ticket-system")
    .collection("query-from-user")
    .find()
    .toArray();
}
async function getingmanagertoadmin() {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .find()
    .toArray();
}
async function getinghelpertoadmin() {
  return await client
    .db("ticket-system")
    .collection("helper-signup-signin")
    .find()
    .toArray();
}
async function adminprofile(name) {
  return await client
    .db("ticket-system")
    .collection("admin-signup-signin")
    .findOne({ adminname: name });
}
async function adminprofiles(name, profile) {
  return await client
    .db("ticket-system")
    .collection("admin-signup-signin")
    .updateOne({ adminname: name }, { $set: { profileimage: profile } });
}
async function adminlogout(name) {
  return await client
    .db('ticket-system')
    .collection('admin-token')
    .deleteOne({ adminname: name });
}
async function admintokens(adminname) {
  return await client
    .db('ticket-system')
    .collection('admin-token')
    .findOne({ adminname: adminname });
}
async function creatingmanagers(managerDetails) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .insertOne(managerDetails);
}
async function adminfromdb(adminname) {
  return await client
    .db("ticket-system")
    .collection("admin-signup-signin")
    .findOne({ adminname: adminname });
}
export async function creatingadmin(adminDetails) {
  return await client
    .db("ticket-system")
    .collection("admin-signup-signin")
    .insertOne(adminDetails);
}
async function storeadmintokens(token, getAdminFromDB) {
  return await client
    .db("ticket-system")
    .collection("admin-token")
    .insertOne({
      admintoken: token,
      adminname: getAdminFromDB.adminname
    });
}
async function getinghelperfromdbs(helpername) {
  return await client
    .db("ticket-system")
    .collection("helper-signup-signin")
    .findOne({ helpername: helpername });
}
async function getingmanagerfromdb(managername) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .findOne({ managername: managername });
}
async function createhelpers(helperDetails) {
  return await client
    .db("ticket-system")
    .collection("helper-signup-signin")
    .insertOne(helperDetails);
}
async function changePassword(data) {
  return await client
    .db("ticket-system")
    .collection("admin-signup-signin")
    .updateOne({ adminname: data.adminname }, { $set: { password: data.password } });
}
async function changemanage(managername, newname, newgender) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .updateOne({ managername: managername }, { $set: { name: newname, gender: newgender } });
}
async function changehelpername(helpername, newname, newgender) {
  return await client
    .db("ticket-system")
    .collection("helper-signup-signin")
    .updateOne({ helpername: helpername }, { $set: { name: newname, gender: newgender } });
}