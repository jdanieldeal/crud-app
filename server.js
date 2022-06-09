const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://jdangle:asdfghjkl@cluster0.erktcod.mongodb.net/?retryWrites=true&w=majority'

app.listen(3000, function() {
    console.log('listening on 3000')
})



MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/', (req,res) => {
        res.sendFile(__dirname + '/index.html')
    })
    app.post('/quotes', (req, res) => {
        console.log(req.body)
      })
})
