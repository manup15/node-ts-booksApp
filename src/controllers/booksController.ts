import { Request, Response } from 'express'
import mongoose from 'mongoose'
import BookModel, {Book} from '../models/Books'


class BooksController {

    public async index (req: Request, res: Response):Promise <void> { 
        const books:Book[] = await BookModel.find()
        res.render('books/index', { 
            title: 'All books', 
            books: books.map(book => book.toJSON())
        })
    }

    public add (req: Request, res: Response):void { 
        res.render('books/add', { title: 'Add a book' })
    }

    public async saveBook (req: Request, res: Response) {
        try {
            const { title, author, isbn } =  req.body
            const book: Book =  new BookModel({ title, author, isbn })
            await book.save()
        } catch (error) {
            console.log(error);
            
        }
        res.redirect('/books')
    }
}

export const booksController = new BooksController()