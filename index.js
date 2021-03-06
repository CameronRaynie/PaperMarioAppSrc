const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const badgeList = require('./public/data/bigListOfBadges.json')
app.use(express.static(__dirname + '/public'))

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
  }))
  app.set('view engine', 'handlebars')


//Main Page
app.get('/', (req, res) => res.render('HomePage'))

app.get('/Partners', (req, res) => res.render('Partners'))

app.get('/Enemies', (req, res) => res.render('Enemies'))

app.get('/About', (req, res) => res.render('About'))

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})
//
module.exports = badgeList;
//
app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))