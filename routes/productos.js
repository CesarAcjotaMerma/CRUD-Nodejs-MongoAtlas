const { Router } = require('express');
//const { check } = require('express-validator');

//const { validarCampos } = require('../middlewares/validar-campos');
//const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

const { productosGet,
    relatedProductosGet,
    productoPost,
    productoCreate,
    editproducto,
    productoPut,
    productoPatch,
    detailproductoGet,
    contactos,
    productosDelete,} = require('../controller/productos')

router.get('/productos',productosGet);
//router.get('/productos/:id',relatedProductosGet);
router.get('/productos/:id',detailproductoGet);
router.get('/contactos',contactos);

//router.get('/producto/add', productoPost);
router.post('/producto/create',productoCreate );

router.get('/productos/edit/:id',editproducto);
router.put('/productos/edit/:id',productoPut);

router.delete('/productos/delete/:id',productosDelete );

//router.patch('/productos', usuariosPatch );
module.exports = router;