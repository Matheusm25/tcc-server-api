import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Hash from '@ioc:Adonis/Core/Hash';
import jwt from 'jsonwebtoken';
import Env from '@ioc:Adonis/Core/Env';
import User from 'App/Models/User';
import Truck from 'App/Models/Truck';

export default class AuthController {
  public async loginByUser({ request, response }: HttpContextContract) {
    try {
      const { email, password } = request.body();

      const user = await User.findBy('email', email);

      if (!user) {
        throw new Error('User does not exists');
      }

      if (await Hash.verify(user.password, password)) {
        const token = jwt.sign(
          { ...user.toJSON(), entity: 'User' },
          Env.get('APP_KEY'),
        );
        return response.status(200).json({ token, user });
      } else {
        throw new Error('invalid password');
      }
    } catch (err) {
      return response.status(err.status || 400).send({ error: err.message });
    }
  }

  public async loginByTruck({ request, response }: HttpContextContract) {
    try {
      const { email, password } = request.body();

      const truck = await Truck.findBy('email', email);

      if (!truck) {
        throw new Error('Truck does not exists');
      }

      if (await Hash.verify(truck.password, password)) {
        const token = jwt.sign(
          { ...truck.toJSON(), entity: 'Truck' },
          Env.get('APP_KEY'),
        );
        return response.status(200).json({ token, truck });
      } else {
        throw new Error('invalid password');
      }
    } catch (err) {
      return response.status(err.status || 400).send({ error: err.message });
    }
  }
}
