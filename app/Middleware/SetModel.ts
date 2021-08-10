import HttpContextContractExtended from 'App/interfaces/HttpContext/HttpContextContractExtended';

export default class SetModel {
  public async handle(
    ctx: HttpContextContractExtended,
    next: () => Promise<void>,
    guards?: string[],
  ) {
    const [modelName] = guards || [];
    ctx.Model = (await import(`App/Models/${modelName}`)).default;
    ctx.modelName = modelName;
    await next();
  }
}
