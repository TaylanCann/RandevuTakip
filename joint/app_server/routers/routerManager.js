var routeUser=require('../../../user/app_server/routers/UserRouter');
var routeAdmin=require('../../../admin/app_server/router/AdminRouter');


module.exports = function(app){
    app.use('/user', routeUser);
    app.use('/admin', routeAdmin);
    
}