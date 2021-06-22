import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import DefaultModel from '../../Models/DefaultModel';

export default interface HttpContextContractWithModel
  extends HttpContextContract {
  Model: typeof DefaultModel;
  modelName: string;
};
