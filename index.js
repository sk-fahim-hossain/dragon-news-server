const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

const categories = require('./data/categories')

app.get('/', (req, res) => {
  res.send('SERVER IS Running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon API is running on Port ${port}`)
})