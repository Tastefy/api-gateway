import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT || 8888

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.send('API GATEWAY!  ssfasdaddddddssss')
})

app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.toString()
  })
})
app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening on port ${port}`)
})
