const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/example', (req, res) => {
  res.json({ message: 'Looks good to me!' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})