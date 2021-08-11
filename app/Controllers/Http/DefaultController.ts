import HttpContextContractExtended from 'App/interfaces/HttpContext/HttpContextContractExtended';

export default class DefaultController {
  public async index({
    response,
    Model,
    request,
  }: HttpContextContractExtended) {
    try {
      const relationships = request.header('relationships')
        ? JSON.parse(request.header('relationships') || '')
        : '';

      const modelQuery = Model.query();

      if (relationships) {
        relationships.forEach(model => {
          modelQuery.preload(model);
        });

        const entities = await modelQuery.exec();
        return response.status(200).json(entities);
      } else {
        const entities = await Model.all();
        return response.status(200).json(entities);
      }
    } catch (err) {
      console.log(err);
      response.status(err.status || 500).json({ message: err.message });
    }
  }

  public async store({
    response,
    request,
    Model,
    loggedEntity,
  }: HttpContextContractExtended) {
    try {
      const relationships = request.header('relationships')
        ? JSON.parse(request.header('relationships') || '')
        : '';

      let tenant = {};

      if (Model.tenant !== 'none') {
        tenant[`${Model.tenant.toLowerCase()}_id`] = loggedEntity?.id;
      }

      const newEntity = await Model.create({ ...request.body(), ...tenant });
      const modelQuery = Model.query().where({ id: newEntity.id });
      if (relationships) {
        relationships.forEach(model => {
          modelQuery.preload(model);
        });
        const entity = await modelQuery.firstOrFail();
        return response.status(201).json(entity.toJSON());
      } else {
        return response.status(201).json(newEntity.toJSON());
      }
    } catch (err) {
      console.log(err);
      response.status(err.status || 500).json({ message: err.message });
    }
  }

  public async show({
    response,
    params,
    request,
    Model,
  }: HttpContextContractExtended) {
    try {
      const relationships = request.header('relationships')
        ? JSON.parse(request.header('relationships') || '')
        : '';

      const { id } = params;
      const modelQuery = Model.query().where({ id });
      if (relationships) {
        relationships.forEach(model => {
          modelQuery.preload(model);
        });
      }

      const entity = await modelQuery.firstOrFail();
      return response.status(200).json(entity.toJSON());
    } catch (err) {
      console.log(err);
      response.status(err.status || 500).json({ message: err.message });
    }
  }

  public async update({
    response,
    params,
    request,
    Model,
  }: HttpContextContractExtended) {
    try {
      const relationships = request.header('relationships')
        ? JSON.parse(request.header('relationships') || '')
        : '';

      const { id } = params;
      const args = request.body();
      const modelQuery = Model.query().where('id', id);
      if (relationships) {
        relationships.forEach(model => {
          modelQuery.preload(model);
        });
      }
      const entity = await modelQuery.firstOrFail();
      entity.merge(args);
      await entity.save();

      return response.status(200).json(entity.toJSON());
    } catch (err) {
      console.log(err);
      response.status(err.status || 500).json({ message: err.message });
    }
  }

  public async destroy({
    response,
    params,
    Model,
  }: HttpContextContractExtended) {
    try {
      const { id } = params;
      const entity = await Model.findOrFail(id);
      await entity.delete();
      return response.status(204);
    } catch (err) {
      console.log(err);
      response.status(err.status || 500).json({ message: err.message });
    }
  }
}
