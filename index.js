const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/upcoming', (req, res) => res.render('pages/upcoming'))
  .get('/results', (req, res) => res.render('pages/results'))
  .get('/structure', (req, res) => res.render('pages/structure'))
  .get('/rules', (req, res) => res.render('pages/rules'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
