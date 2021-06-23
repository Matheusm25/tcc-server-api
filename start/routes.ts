import Route from '@ioc:Adonis/Core/Route';

Route.get('/users', 'DefaultController.index').middleware('setModel:User');
Route.post('/users', 'DefaultController.store')
  .middleware('setModel:User')
  .middleware('validator:create');
Route.get('/user/:id', 'DefaultController.show')
  .middleware('setModel:User')
  .middleware('validator:show');
Route.put('/user/:id', 'DefaultController.update')
  .middleware('setModel:User')
  .middleware('validator:update');
Route.delete('/user/:id', 'DefaultController.destroy')
  .middleware('setModel:User')
  .middleware('validator:delete');
