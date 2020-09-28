const fs = require('fs');
const colors = require ('colors');

let data = ''

let listarTabla = (base, limite) => {
    console.log(`=========Tabla del ${base}=========`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}\n`.green);    
    }
    console.log(`===================================`.green);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un numero`)
            return
        }
        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);    
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) reject(err);
          else resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}