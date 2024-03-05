require('dotenv').config()

const express = require('express')
const app = express()

const expressLayout = require('express-ejs-layouts')
const port = 3000

app.use(express.static('public'))
app.use('/', require('./server/routes/main'))

// Templating
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
