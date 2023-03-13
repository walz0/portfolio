const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.static('public'))

// app.get('/', (req, res) => {
// })
app.listen(port, () => console.log(`Server listening on port ${port}`))