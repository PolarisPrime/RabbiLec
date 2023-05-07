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

// Middleware, should before any CRUD operations
app.set('view engine', 'ejs') // ejs helps with templating
app.use(express.static('public')) // set's up folder to hold CSS and JS files
app.use(express.urlencoded({extended:true})) //helps to parse URLs
app.use(express.json())
app.use(cors())


// DB_STRING
//  Port = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running")
})