// Declared dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

// Declared variables
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'rabbiLec',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {console.log(`Connected to Database`)
    db = client.db(dbName)
    collection = db.collection('lectures')
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// DB_STRING
//  Port = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running")
})