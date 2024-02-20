ObjectId -require ("../index.js");

async function postingcommands(request) {
  return await client
    .db("ticket-system")
    .collection("command")
    .insertOne(request.body);
}
async function getingmanagerdetails(name) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .findOne({ managername: name });
}
async function getingquerydetailstomanager(id) {
  return await client
    .db("ticket-system")
    .collection("query-from-user")
    .findOne({ _id: ObjectId(id) });
}
async function getingquerystomanager() {
  return await client
    .db("ticket-system")
    .collection("query-from-user")
    .find()
    .toArray();
}
async function updatingquerydetails(id, status, emailcontent, completedmanagername) {
  return await client
    .db("ticket-system")
    .collection("query-from-user")
    .updateOne({ _id: ObjectId(id) }, {
      $set: {
        status: status, emailcontent: emailcontent,
        completedmanagername: completedmanagername
      }
    });
}
async function managerprofiles(name) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .findOne({ managername: name });
}
async function managerprofile(name, profile) {
  return await client
    .db("ticket-system")
    .collection("manager-signup-signin")
    .updateOne({ managername: name }, { $set: { profileimage: profile } });
}
async function managerlogouts(name) {
  return await client
    .db('ticket-system')
    .collection('manager-token')
    .deleteOne({ managername: name });
}
async function managertokens(managername) {
  return await client
    .db('ticket-system')
    .collection('manager-token')
    .findOne({ managername: managername });
}