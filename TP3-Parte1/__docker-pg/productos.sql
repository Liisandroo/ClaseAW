-- Conectar a la base de datos 'tienda'
\c productos;

-- Crear la tabla 'productos'
CREATE TABLE Adicionales (
    id SERIAL PRIMARY KEY,
    producto VARCHAR(100),
    precio NUMERIC(10, 2),
    imagen VARCHAR(100)
);

-- Insertar 10 productos deportivos
INSERT INTO Adicionales (producto, precio, imagen) VALUES
    ('Torta', 20000, torta.img),
    ('Piñata', 15000, pinata.img),
    ('Sopresita', 1000, sorpresita.img),
    ('Maquillaje', 10000, maquillaje.img),
    ('Gaseosa', 4000, gaseosa.img),
    ('Copetin', 50000, copetin.img),
    ('Pancho', 1500, pancho.img);

CREATE TABLE Salas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    precio NUMERIC(10, 2),
    imagen VARCHAR(100),
    descripcion TEXT
);

INSERT INTO Salas (nombre, precio, descripcion, imagen) VALUES
    ('Sala Amarilla', 100000, 'Descripcion', Salaamarilla.img),
    ('Sala Calesita', 150000, 'Descripcion', Salacalesita.img),
    ('Sala Oeste', 200000, 'Descripcion', Salaoeste.img),
    ('Sala Cartoon', 250000, 'Descripcion', Salacartoon.img);

CREATE TABLE Empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
);
INSERT INTO Empleados (nombre) VALUES
    ('Lucas'),
    ('Joaquin'),
    ('Lisandro'),
    ('Ismael');
