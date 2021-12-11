const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://admin:1admin9@proyectos.v6tev.mongodb.net/tiendaRegalos'

const dbConnection = async() =>{
    try {

        await mongoose.connect( MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
        console.log('Base de datos conected successfull');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}

module.exports = {
    dbConnection
}
