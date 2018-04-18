//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.listen(process.env.PORT || 8080, function () {
    console.log('Example app listening on port 8080!')
  })