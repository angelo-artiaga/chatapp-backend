const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.w6qxq.mongodb.net/chatapp?retryWrites=true&w=majority`,
  () => {
    console.log('connected to mongodb')
  }
)
