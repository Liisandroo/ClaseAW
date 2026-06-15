import jwt from 'jsonwebtoken'

//Middleware 
const logger = (req, res, next) => {
    //creamos constante fecha para que de la fecha y hora
    const fecha = new Date().toLocaleString();
    //en la consola muestra la fecha y hora, y la url donde se hizo la solicitud
    console.log(`[${fecha}] Solicitud en la ruta: ${req.url}`);
    
    // IMPORTANTE: next() le dice a Express que continúe con la siguiente función
    next();
};
export const verificarToken = (req, res, next) => {
    //Vemos todas las cookies que llegan al servidor
    console.log("1. Cookies recibidas en el middleware:", req.cookies); 

    const token = req.cookies.token_parcial;

    if (!token) {
        console.log("2. Error: No se encontró 'token_parcial' en las cookies.");
        return res.redirect('/login'); 
    }

    try {
        //Vemos si la clave secreta se está leyendo
        console.log("3. Clave secreta usada para verificar:", process.env.FIRMA_JWT);

        const decodificado = jwt.verify(token, process.env.FIRMA_JWT);
        
        console.log("4. ¡Token verificado con éxito! Usuario:", decodificado);
        req.usuario = decodificado; 
        next(); 

    } catch (error) {
        console.log("Error al verificar el token:", error.message);
        
        res.clearCookie('token_parcial');
        return res.redirect('/login');
    }
};
export default logger;