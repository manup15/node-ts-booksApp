import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'

// importing routes
import indexRoutes from './routes'
import booksRoutes from './routes/books'

//initializations
const app = express()
import './database'

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes 
app.use('/', indexRoutes)
app.use('/books', booksRoutes)

//static files
app.use(express.static(path.join(__dirname, 'public')))
//starting the server
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
    
})