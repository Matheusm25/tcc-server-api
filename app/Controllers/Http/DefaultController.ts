import HttpContextContractWithModel from 'App/interfaces/HttpContext/HttpContextContractWithModel';

export default class DefaultController {
  public async index({
    response,
    Model,
    request,
  }: HttpContextContractWithModel) {
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
  }: HttpContextContractWithModel) {
    try {
      const newEntity = await Model.create(request.body());
      return response.status(201).json(newEntity.toJSON());
      // set Relationshps in afterQuery
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
  }: HttpContextContractWithModel) {
    try {
      const { id } = params;
      const entity = await Model.findOrFail(id);
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
  }: HttpContextContractWithModel) {
    try {
      const { id } = params;
      const args = request.body();
      const entity = await Model.findOrFail(id);
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
  }: HttpContextContractWithModel) {
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
