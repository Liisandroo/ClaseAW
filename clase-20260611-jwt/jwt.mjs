import jwt from 'jsonwebtoken'

const datosPayload = {
    usuario: 'licha',
    rol: 10
}
//
jwt.sign(datosPayload, 'frasesupersecreta',{expiresIn: '1h'}, (error,  Token)=>{
    if(error) return console.log(error)
        console.log(Token)
}   )