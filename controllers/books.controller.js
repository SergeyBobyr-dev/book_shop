const dotenv = require('dotenv');
const books = require('../models').books;
const categories = require('../models').categories;
const type = require('../models').type;
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

    async editBook(req, res) {

        try {
            const {id, name, author, description, year_of_production, price, category_id, rate, type} = req.body

            const checkId = await books.findOne({
                where: { id }
            })

            if(checkId){
                const editedBook = await books.update(
                    { name, author, description , year_of_production, price, category_id, rate, type },
                    {where:{id}})
                    return res.status(200).send("book updated")
            }else{
                res.json("book not found")
            }

            
        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }

    async removeBook(req, res) {

        try {
            const {id} = req.body
            const removedBook = await books.destroy({where:{
                id
              }})
            res.json("book removed")
        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }

    async addCategories(req, res){
        try{
            const { name } = req.body;
            const newCategory = await categories.create({
                name
            })
            res.json(newCategory)
        }catch(e){
            console.log(e);
        }
    }

    async addType(req, res){
        try{
            const { name } = req.body;
            const newType = await type.create({
                name
            })
            res.json(newType)
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = new booksController()