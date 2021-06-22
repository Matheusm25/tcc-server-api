import HttpContextContractWithModel from 'App/interfaces/HttpContext/HttpContextContractWithModel';

export default class SetModel {
  public async handle(
    ctx: HttpContextContractWithModel,
    next: () => Promise<void>,
    guards?: string[],
  ) {
    const [modelName] = guards || [];
    ctx.Model = (await import(`App/Models/${modelName}`)).default;
    ctx.modelName = modelName;
    await next();
  }
}
