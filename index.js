const express = require('express')
const authRouter = require('./routes/auth.router')
const rolesRouter = require('./routes/roles.router')
const booksRouter = require('./routes/books.router')
const PORT = process.env.PORT || 3000
const app = express()
const {sequelize} = require('./models');

app.use(express.json())
app.use("/auth", authRouter)
app.use("/roles", rolesRouter)
app.use("/books", booksRouter)


const start = async () => {
        await sequelize.sync({force: true })
        // await sequelize.sync({alter: true})

    try {
        app.listen(PORT, () => {
            console.log(`Server is runing on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start()


