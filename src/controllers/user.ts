import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/user'
import jwt from 'jsonwebtoken'

export const newUser = async (req: Request, resp: Response) => {
    const { username, password } = req.body

    // Validamos si el usuario ya existe en la bd
    const user = await User.findOne({ where: { username: username } })

    if (user) {
        return resp.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        //guardamos usuarios en la bd
        await User.create({
            username: username,
            password: hashedPassword
        })
        resp.json({
            msg: `Usuario ${username} created successfully`
        })

    } catch (error) {
        resp.status(400).json({
            msg: 'Upps ourrio un error',
            error
        })

    }

}

export const loginUser = async (req: Request, resp: Response) => {
    const { username, password } = req.body

    const user: any = await User.findOne({ where: { username: username } })


    // validamos si el usuario exite en la base de datos
    if (!user) {
        return resp.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base de datos`
        })
    }


    // validamos password

    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
        return resp.status(400).json({
            msg: `Password incorrecto`
        })
    }


    // generamos token
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123'
    ,     {        expiresIn: '10000'   }
    
    )

    console.log(token)

    resp.json(token)
}