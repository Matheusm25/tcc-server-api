import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DefaultModel from '../../Models/DefaultModel/BaseModel';

interface HttpContextContractWithModel extends HttpContextContract {
  Model: typeof DefaultModel;
  modelName: string;
}

export default HttpContextContractWithModel;
