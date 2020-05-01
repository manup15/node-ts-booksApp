import { Request, Response } from 'express'

class IndexController {
    public index (req: Request, res: Response) { 
        res.render('index', { title: 'welcome to the books app' })
    }
    public about (req: Request, res: Response) { 
        res.render('about', { title: 'About' })
    }
}

export const indexController = new IndexController()