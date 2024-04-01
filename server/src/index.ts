import express from 'express'
import dotenv from 'dotenv'

// For env File
dotenv.config()
console.log(process.env)

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to Express & TypeScript Server')
})

app.listen(port, () => {
  console.log('Server Ejecutandose')
})
