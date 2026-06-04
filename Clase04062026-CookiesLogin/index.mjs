import express from 'express'
import cookieParser from 'cookie-parser'

const PUERTO = 3030
const app = express()

app.use(cookieParser('clavesecreta'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

function ChequearCookie(req,res, next){
    const SesionId = req.signedCookies['SesionId']
    if(SesionId==='minumero'){
        return next()
    }
    return res.redirect('/login')
}
//Admin
app.use('/admin',ChequearCookie, express.static('./front-end/front-admin'))

//Login
app.use('/login', express.static('./front-end/front-login'))

//Ruta q va a gestionar la autenticacion
app.post('/autenticacion',(req, res)=>{
    const {usuario, clave} = req.body

    if(usuario != 'admin' || clave != '1234'){
        return res.redirect('/login')
    }
    //Lo guardo en BD
    console.log(req.body)
    res.cookie('SesionId', 'minumero',{
        signed: true,
        httpOnly: true,
        sameSite: 'lax',
        secure: true, 
        maxAge: 1000 * 60 * 60
    })
    //res.send('Logeado')
    res.redirect('/admin')
})

app.listen(PUERTO)