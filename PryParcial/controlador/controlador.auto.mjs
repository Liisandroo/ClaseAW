import fs from 'fs'

// Esta función lee el archivo y lo convierte en algo que JS entienda
const leerAutos = () => {
    const datosCargados = fs.readFileSync('./datos/datos.json', 'utf-8'); // Lee el archivo como texto
    return JSON.parse(datosCargados); // Lo convierte en un array de objetos
};

export function obtenerAutos(req, res) {
    try {
        const autos = leerAutos();
        res.status(200).json(autos);
    } catch (error) {
        res.status(404).json("Error al leer el archivo");
    }
};

// Función para obtener un solo auto por su ID
export const obtenerPorId = (req, res) => {
    try {
        //le damos un nombre a la funcion
        const autos = leerAutos(); 

        //convertimos el id a numero
        const idBuscado = parseInt(req.params.id);
        
        // Creamos la constante para que pueda buscar por id
        const auto = autos.find(a => a.id === idBuscado);

        if (auto) {
            res.status(200).json(auto);
        } else {
            res.status(404).json({ mensaje: "Auto No Encontrado" });
        }
    } catch (error) {
        
        res.status(500).json("Error Al Buscar El Auto");
    }
};

export const buscarNuevitos = (req, res) => {
    const autos = leerAutos();
    
    // Filtramos autos casi nuevos
    const nuevitos = autos.filter(a => a.km < 20000 && a.anio >= 2021);

    res.status(200).json({
        proceso: "Busqueda De Autos Semi-Nuevos",
        cantidad_encontrada: nuevitos.length,
        items: nuevitos
    });
};


