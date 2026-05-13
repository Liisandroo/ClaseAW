//Middleware 
const logger = (req, res, next) => {
    //creamos constante fecha para que de la fecha y hora
    const fecha = new Date().toLocaleString();
    //en la consola muestra la fecha y hora, y la url donde se hizo la solicitud
    console.log(`[${fecha}] Solicitud en la ruta: ${req.url}`);
    
    // IMPORTANTE: next() le dice a Express que continúe con la siguiente función
    next();
};

export default logger;