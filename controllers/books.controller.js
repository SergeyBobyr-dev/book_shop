const mailer = require('../nodemailer');
const dotenv = require('dotenv');
const books = require('../models').books;
dotenv.config();


const EMAIL_SECRET = process.env.SECRET;



class booksController {

    async addBook(req, res) {
        try {
            const { name, author, description, year_of_production, price, category_id, rate, type } = req.body;

            const newBook = await books.create({
                name, author, description, year_of_production, price, category_id, rate, type
            })

            res.json(newBook)


        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }

    

    async getBooks(req, res) {

        try {
            const allBooks = await books.findAll()
            res.json(allBooks)
        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }
}

module.exports = new booksController()