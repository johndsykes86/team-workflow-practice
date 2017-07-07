const express = require('express')
const app = express()

console.log('Hello There, User!');

app.listen(3000, function() {
  console.log("server running on 3000")
})
