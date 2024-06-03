const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes=require('./routes/TodoRoute')


const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()


mongoose.connect("mongodb://127.0.0.1:27017/taskbar")
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });


app.use(routes)

const PORT=process.env.port||4000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})