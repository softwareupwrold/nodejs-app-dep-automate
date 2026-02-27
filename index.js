import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.get ('/', (req, res)  => {
    return res.json({ msg: "wow Hello from the server 1"})
})

app.listen(PORT, () => {
    console.log(`Server is running  on PORT ${PORT}`)
})