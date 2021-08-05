const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar=false, hasta=10) => {

    try {
        let salida = '';
        let consola = '';
        console.clear();
    
        
        
        for(let i = 0; i <= hasta; i++ ){
            salida +=  `${base} x ${i} = ${i * base}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i * base}\n`;
            
        }
        if( listar ){
            console.log('========================'.green);
            console.log(`  Tabla del  ${ colors.blue(base ) }   `.green);
            console.log('========================'.green);
            
            console.log(consola);

            
        }
        /*
        fs.writeFile(`tabla-${base}.txt`,salida,(err) =>{
            if(err) throw err;
            
            console.log(`tabla-${base}.txt creada`);
        });
        */
       fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
       
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}