ObjectId =require("../index.js");

async function getingquerydetails(id) {
    return await client
        .db("ticket-system")
        .collection("query-from-user")
        .findOne({ _id: ObjectId(id) });
}
async function postingquerys(request) {
    return await client
        .db("ticket-system")
        .collection("query-from-user")
        .insertOne(request.body);
}
async function getingquerys() {
    return await client
        .db("ticket-system")
        .collection("query-from-user")
        .find()
        .toArray();
}
 async function getuserprofile(name) {
    return await client
        .db("ticket-system")
        .collection("user-signup-signin")
        .findOne({ email: name });
}
 async function userprofile(name, profile) {
    return await client
        .db("ticket-system")
        .collection("user-signup-signin")
        .updateOne({ email: name }, { $set: { profileimage: profile } });
}
 async function userlogout(name) {
    return await client
        .db('ticket-system')
        .collection('user-token')
        .deleteOne({ username: name });
}
 async function usertoken(username) {
    return await client
        .db('ticket-system')
        .collection('user-token')
        .findOne({ username: username });
}
 async function creatingusers(userDetails) {
    return await client
        .db("ticket-system")
        .collection("user-signup-signin")
        .insertOne(userDetails);
}
 async function getinguserfromdb(username) {
    return await client
        .db("ticket-system")
        .collection("user-signup-signin")
        .findOne({ email: username });
}
 async function changePassword(data) {
    return await client
      .db("ticket-system")
      .collection("user-signup-signin")
      .updateOne({ email: data.email }, { $set: { password: data.password } });
  }