// packages
const express = require('express')
const cors = require('cors')

// routes
const MainRoutes = require('./routes/main')

// app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// middleware routes
app.use(MainRoutes)

// dev
const dev = async () => {
    const PORT = 4100

    try {
        app.listen(PORT, () => console.log(`App has been started on http://localhost:${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

dev()