const express = require('express');

const app = express()

app.get('/', (req,res) => {
    res.send('Jello Wold')
})

app.get('/user', (req,res) => {
    res.status(200).json({
        name: "Pirayu",
        NickName: "Tadkerd"
    })
})

app.listen(3333, () => {
    console.log("listen on port 3333")
})