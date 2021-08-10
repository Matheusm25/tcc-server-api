import Route from '@ioc:Adonis/Core/Route';
import { string } from '@ioc:Adonis/Core/Helpers';
import { pluralize } from '@poppinss/utils/build/src/Helpers/string';

const Models = [
  'Address',
  'FavoriteTruck',
  'Item',
  'ItemCategory',
  'Schedule',
  'Truck',
  'User',
];

Models.forEach(model => {
  const modelName = string.camelCase(model);

  Route.group(() => {
    Route.get(`/${pluralize(modelName)}`, 'DefaultController.index');

    Route.post(`/${modelName}`, 'DefaultController.store').middleware(
      'validator:create',
    );

    Route.get(`/${modelName}/:id`, 'DefaultController.show').middleware(
      'validator:show',
    );

    Route.put(`/${modelName}/:id`, 'DefaultController.update').middleware(
      'validator:update',
    );

    Route.delete(`/${modelName}/:id`, 'DefaultController.destroy').middleware(
      'validator:delete',
    );
  })
    .middleware(`setModel:${model}`)
    .middleware('auth');
});

Route.post('/loginByUser', 'AuthController.loginByUser');
Route.post('/loginByTruck', 'AuthController.loginByTruck');
