const express = require('express')
const app = express()
const PORT = 8383

// HTTP VERBS & Routes (or paths)

app.get('/', (req, res) => {
    console.log('teste', req.method)
    res.sendStatus(201)
}) 

app.use(express.json())
app.listen(PORT, () => console.log(`Sever has started on: ${PORT}`))