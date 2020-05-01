import mongoose, { Schema, model } from 'mongoose'

//create interface to verify book data. This is TS
export interface Book extends  mongoose.Document {
    title: String,
    author: String,
    isbn: String
}

const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String 
})

export default model<Book>('Book', BookSchema)