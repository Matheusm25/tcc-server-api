import HttpContextContractExtended from 'App/interfaces/HttpContext/HttpContextContractExtended';
import Env from '@ioc:Adonis/Core/Env';
import jwt from 'jsonwebtoken';

export default class Auth {
  public async handle(
    ctx: HttpContextContractExtended,
    next: () => Promise<void>,
    guards?: Array<string>,
  ) {
    try {
      const [entity] = guards || [];

      if (entity === 'none') {
        await next();
      } else {
        const token = (ctx.request.header('authorization') || '').split(
          'Bearer ',
        )[1];
        if (!token) {
          throw new Error('Validation token not found');
        }

        if (jwt.verify(token, Env.get('APP_KEY'))) {
          const tokenData = jwt.decode(token);

          if (ctx.request.method() !== 'GET' && entity !== tokenData.entity) {
            throw new Error('Permission denied');
          }

          ctx.loggedEntity = {
            id: tokenData.id,
            entity: tokenData.entity,
          };
          await next();
        }
      }
    } catch (err) {
      return ctx.response
        .status(400 || err.status)
        .send({ error: err.message });
    }
  }
}
