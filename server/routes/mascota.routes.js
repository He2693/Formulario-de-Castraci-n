const MascotaController = require("../controllers/mascota.controller");
const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.get('/api/mascota/', MascotaController.get_all);
    app.post('/api/mascota', MascotaController.create_Mascota);
    
    app.get('/api/mascotaUser/:idUsuario', MascotaController.get_MascotasPorUsuario);
    app.get('/api/mascota/:id', MascotaController.get_Mascota);
    //app.get('/api/mascota/:id_usuario', MascotaController.get_Mascota_by_user);
    app.get('/api/usuario/:id',UserController.get_Usuario);
    app.get('/api/usuario',UserController.get_Usuario);
    app.put('/api/mascota/:id', MascotaController.update_Mascota);
    app.delete('/api/mascota/:id', MascotaController.delete_Mascota);

    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}