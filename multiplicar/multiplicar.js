//2 * 2 = 4

//fs coloco los paquetes que voy a requerir
//colocar el path donde esta nuestros modulos


//let base = 5;


//PARTE DOS CLASE NUEVA
//hacer una funcion que permita dos parametros que es base y limite 
// esta funcion esta echa con async
/*
let listarTabla = async (base, lemite) => {
    if (!Number(base)){
        throw new Error (`el valor ${base} no es un nuemro`);
    }
    let data= "";
    for(let j =1; j<= limite; j++){
        data += `${base} * ${i} = ${base * i}\n`
    }
    return data;
}
*/

//FUNCION DEL INGE CREAR UNA FUNCION QUE TENGA DOS PARAMETROS 
//COMO BASE Y LIMITE

const fs = require('fs'); //estoy requeriendo el modulo de file system
var colors = require('colors');


let listarTabla = (base, limite = 10) => { //en limite puedo dar un valor por defecto
        if (!Number(base)) {
            console.log(`el valor de la base ${base} no es valido`);
            return;
        }
        console.log("=======================".green);
        console.log(`tabla de multiplicar ${base}`.green);
        console.log("=======================".green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    }
    //al crear la funcion luego debe estar exportada


//CREAR UNA PROMESA
let crearArchivo = (base, limite = 10) => {
        return new Promise((resolve, reject) => {
            //PROMESA   

            //validar que la base dea un numero
            if (!Number(base)) {
                reject(`el valor de la base ${base} no es valido`);
                return;

            }
            let data = ''; //contiene la informacion

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`; //para imprimir en un archivo
            }

            fs.writeFile(`tablas/tabla ${base}-al -${limite}.txt`, data, (err) => { //aumento fs es un objeto
                //el path es relativo
                //se crear un archivo .txt y se dirige a la carpeta tablas
                if (err)
                    reject(err);
                else
                    resolve(`el archivo se guardo de la tabla ${base} al ${limite}`);
            });

        });

    }
    //PARA EXPORTAR UNA FUNCION

module.exports = {
    crearArchivo, //se exporta para que otros modulos puedan ocupar
    listarTabla
}