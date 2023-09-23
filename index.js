const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())


const categories = require('./data/categories')
const news = require('./data/news.json')

app.get('/', (req, res) => {
  res.send('SERVER IS Running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req,res) =>{
    res.send(news)
})

app.get('/news/:id', (req,res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id == id);
    res.send(selectedNews)
    console.log(selectedNews)
})

app.get('/categories/:id', (req,res) =>{
    const id = parseInt(req.params.id)
    if(id === 0){
        res.send(news)
    }
    else{
        const selectedCategory = news.filter(c => parseInt(c.category_id) === id)
        res.send(selectedCategory)
    }
   
})

app.listen(port, () => {
  console.log(`Dragon API is running on Port ${port}`)
})