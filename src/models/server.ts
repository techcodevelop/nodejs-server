import express , {Application}from 'express'
import routesProduct from '../routes/product'
import routesUser from '../routes/user'

import { Product } from './product'
import { User } from './user'

class Server{

    private app: Application
    private port: string

    constructor(){
        this.app = express()
        this.port=process.env.PORT || '3001'
        this.listen()
        this.midlewares()
        this.routes()
        this.dbConnect()
        console.log(process.env.PORT)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplication corriendo en el puerto '+ this.port)
        })
    }

    routes(){
        this.app.use('/api/products', routesProduct)
        this.app.use('/api/users', routesUser)
    }

    midlewares(){
        this.app.use(express.json())
    }

    async dbConnect(){
        try{
            await Product.sync()
            await User.sync()
            console.log('Connection has been established successfully.')
        }catch(error){
            console.error('Unable to conneect to the database:', error)
        }
    } 
}

export default Server