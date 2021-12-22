const port = process.env.PORT || 8080; // this can be very useful if you deploy to Heroku!
const app = require("./app");
//const {db} = require('./db')
//const seed = require('../script/seed')

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

//once you incorporate seeding look back at fs-app-template to wrap starting the server in a try catch
