const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const path = require('path')
const app = express();

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))


app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

