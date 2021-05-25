const express = require('express')

const routes = require('./routes');
const PORT = process.env.PORT || 3000
const app = express()
const {sequelize} = require('./models');

app.use(express.json())
app.use('/', routes);


const start = async () => {
        // await sequelize.sync({force: true })
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
