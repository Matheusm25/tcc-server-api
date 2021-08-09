import HttpContextContractWithModel from 'App/interfaces/HttpContext/HttpContextContractWithModel';
import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';
import { RequestContract } from '@ioc:Adonis/Core/Request';
import { schema, rules, Rule } from '@ioc:Adonis/Core/Validator';

export default class Validator {
  public async handle(
    { Model, request }: HttpContextContractWithModel,
    next: () => Promise<void>,
    guards?: string[],
  ) {
    const [action] = guards || [];
    const schema = (await import(`../Models/schemas/${Model.name}`)).default;
    await this[action](schema(), request, Model.table);
    await next();
  }

  private async show(
    entitySchema: MetaColumnValidation[],
    request: RequestContract,
    table: string,
  ): Promise<void> {
    const entitySchemaValidator = schema.create({
      id: schema.string({}, [
        rules.exists({ table, column: 'id', where: { deleted_at: null } }),
      ]),
    });
    await request.validate({
      schema: entitySchemaValidator,
      data: request.params(),
    });
  }

  private async create(
    entitySchema: MetaColumnValidation[],
    request: RequestContract,
    table: string,
  ): Promise<void> {
    const entityObjectValidator = {};

    entitySchema.forEach(attribute => {
      const rulesArray: Rule[] = [];

      if (attribute.email) {
        rulesArray.push(rules.email());
      }

      if (attribute.unique) {
        rulesArray.push(rules.unique({ table, column: attribute.name }));
      }

      if (attribute.exists) {
        rulesArray.push(
          rules.exists({
            table: attribute.exists.table,
            column: attribute.exists.column || 'id',
            where: { deleted_at: null, ...(attribute.exists.where || {}) },
          }),
        );
      }

      if (attribute.required) {
        console.log(rulesArray);
        entityObjectValidator[attribute.name] = schema[attribute.type](
          {},
          rulesArray,
        );
      } else {
        try {
          entityObjectValidator[attribute.name] = schema[
            attribute.type
          ].optional({}, rulesArray);
        } catch {
          entityObjectValidator[attribute.name] =
            schema[attribute.type].optional(rulesArray);
        }
      }
    });
    const entitySchemaValidator = schema.create(entityObjectValidator);

    await request.validate({ schema: entitySchemaValidator });
  }

  private async update(
    entitySchema: MetaColumnValidation[],
    request: RequestContract,
    table: string,
  ): Promise<void> {
    const entityObjectValidator = {};

    entitySchema.forEach(attribute => {
      const rulesArray: Rule[] = [];

      if (attribute.email) {
        rulesArray.push(rules.email());
      }

      if (attribute.unique) {
        rulesArray.push(rules.unique({ table, column: attribute.name }));
      }

      if (attribute.exists) {
        rulesArray.push(
          rules.exists({
            table: attribute.exists.table,
            column: attribute.exists.column || 'id',
            where: { deleted_at: null, ...(attribute.exists.where || {}) },
          }),
        );
      }

      try {
        entityObjectValidator[attribute.name] = schema[attribute.type].optional(
          {},
          rulesArray,
        );
      } catch {
        entityObjectValidator[attribute.name] =
          schema[attribute.type].optional(rulesArray);
      }
    });

    entityObjectValidator['id'] = schema.string({}, [
      rules.exists({ table, column: 'id', where: { deleted_at: null } }),
    ]);

    const entitySchemaValidator = schema.create(entityObjectValidator);

    await request.validate({
      schema: entitySchemaValidator,
      data: { ...request.all(), ...request.params() },
    });
  }

  private async delete(
    entitySchema: MetaColumnValidation[],
    request: RequestContract,
    table: string,
  ): Promise<void> {
    const entitySchemaValidator = schema.create({
      id: schema.string({}, [
        rules.exists({ table, column: 'id', where: { deleted_at: null } }),
      ]),
    });
    await request.validate({
      schema: entitySchemaValidator,
      data: request.params(),
    });
  }
}
