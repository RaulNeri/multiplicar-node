//Requireds
const fs = require('fs');
const colors = require('colors');

//Ejercicio 4. Listar tabla
let listarTabla = (base, limite = 10) => {

    console.log('================================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================================'.green);
    for (let i = 1; i <= limite; i = i + 1) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

//module.exports.crearArchivo  (base) => {
//Ejercicio 5. Agregar el limite al archivo
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i = i + 1) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
            //Ejercicio 6. Color al texto cuando creas un archivo
                colors.red(resolve(`tabla-${base}-al-${limite}.txt`))
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}