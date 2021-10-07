const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://admin:1admin9@proyectos.v6tev.mongodb.net/lab07'

const dbConnection = async() =>{
    try {

        await mongoose.connect( MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
        console.log('Base de datos conected');

    } catch (error) {
        console.log(error);
        throw new Error('Error la base de datos no se ha conectado');
    }

}

module.exports = {
    dbConnection
}