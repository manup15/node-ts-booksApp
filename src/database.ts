import mongoose from 'mongoose'
import { mongodb } from './keys'

const run = async () => {
    await mongoose.connect(mongodb.URI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("DB is connected");
}

run().catch(err => console.log( err ))