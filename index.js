import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.get ('/', (req, res)  => {
    return res.json({ msg: "wow1 Hello from the server 123"})
})

app.listen(PORT, () => {
    console.log(`Server is running  on PORT ${PORT}`)
})