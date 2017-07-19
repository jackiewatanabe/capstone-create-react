const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify the user provided an email
  if(!req.body.email) {
    return res.status(422).send({ error: 'Bad Input'})
  }

  const email = String(req.body.email);
  //create a new user account using email
  admin.auth().createUser({ uid: email })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
  //respond to user request saying the account was made
}
