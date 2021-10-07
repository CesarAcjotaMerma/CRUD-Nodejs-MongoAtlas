const express =  require('express')
const exphbs = require('express-handlebars')
const path =  require('path')
const cors = require('cors')
const methodOverride = require('method-override');
const {dbConnection} = require('../database');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.app.set('view engine','.hbs');

        this.app.set('views', path.join(__dirname,'../views'))
        this.app.engine('.hbs',exphbs({
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'),'../views/layouts'),
            partialsDir: path.join(this.app.get('views'),'../views/partials'),
            extname: '.hbs'
        }));
        

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

//middlewares
async conectarDB() {
    await dbConnection();
}
middlewares(){
    this.app.use(express.urlencoded({extended:false}));
    this.app.use(methodOverride('_method'));
    // CORS
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

    // Directorio Público
    this.app.use( express.static('public') );
}
//execution(){}

//routes
routes() {
    this.app.use( require('../routes/usuarios'));
    
}

listen(){
    this.app.listen( this.port, () => {
        console.log('Servidor corriendo en puerto', this.port );
    });
}
/*
app.use(require('./routes/documentos.route'));
app.use(require('./routes/tipodocumentos.route'));
app.use(require('./routes/entidades.route'));
app.use(require('./routes/series.route'));
app.use(require('./routes/detalles.route'));*/


/*execution(){
    this.app.get('/',(req,res) =>{
        res.render('tipodocumentos/lista_tipodocumentos')
    });
    
    }*/
}
module.exports = Server;