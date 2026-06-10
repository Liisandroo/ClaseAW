import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();

app.use(express.json());//<------ formato json
app.use(express.urlencoded({ extended: true }))
//admin
app.use('/admin', express.static('./fronts/front-admin'))
//login
app.use('/login', express.static('./fronts/front-login'))
//registrar
app.post('/registrar', async (req, res) => {
    //req.body() //tanto json y eurlencoded se guardan aqui
    console.log(req.body)
    //control
    const { usuario, pass} = req.body

    if (!usuario || !pass) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    //try {
        const salt = await bcrypt.genSalt(10); 
        const hash = await bcrypt.hash(pass, salt);
        console.log(hash)
    //} catch (error)


    const resultado = await pool.query(`INSERT INTO usuarios (username,password_hash) VALUES ($1, $2)`, [usuario, hash])  
    

    if(resultado.rowcCount > 0){
        return res.json({
            mensaje: `el usuario ${usuario} se ha registrado con exito`
        })
    }
    res.json({
        mensaje: "Registrado"
    })
})
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});