const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
//const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const {categoriasGet,
    categoriaPost,
    categoriaCreate,
    editCategoria,
    categoriaPut,
    categoriaPatch,
    categoriasDelete,} = require('../controller/categorias')

router.get('/categorias',categoriasGet);


router.get('/categorias/add', categoriaPost);
router.post('/categorias/create',categoriaCreate );

router.get('/categorias/edit/:id',editCategoria);
router.put('/categorias/edit/:id',categoriaPut );

router.delete('/categorias/delete/:id',categoriasDelete );

//router.patch('/categorias', usuariosPatch );
module.exports = router;