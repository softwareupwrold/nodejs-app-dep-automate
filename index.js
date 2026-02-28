import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.get ('/', (req, res)  => {
    return res.json({ msg: " Hello from the server 123456789"})
})

app.listen(PORT, () => {
    console.log(`Server is running  on PORT ${PORT}`)
})