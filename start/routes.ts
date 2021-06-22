/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/users', 'DefaultController.index').middleware('setModel:User');
Route.post('/users', 'DefaultController.store').middleware('setModel:User');
Route.get('/user/:id', 'DefaultController.show').middleware('setModel:User');
Route.put('/user/:id', 'DefaultController.update').middleware('setModel:User');
Route.delete('/user/:id', 'DefaultController.destroy').middleware(
  'setModel:User',
);
