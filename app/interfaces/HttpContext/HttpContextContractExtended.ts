import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DefaultModel from '../../Models/DefaultModel/BaseModel';

interface HttpContextLoggedEntity {
  id: string;
  entity: string;
}

interface HttpContextContractExtended extends HttpContextContract {
  Model: typeof DefaultModel;
  modelName: string;
  loggedEntity?: HttpContextLoggedEntity;
}

export default HttpContextContractExtended;
