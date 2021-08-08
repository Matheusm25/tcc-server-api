import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Address from './Address';

export default class Truck extends BaseModel {
  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public additional_information: string;

  @column()
  public address_id: string;

  @column()
  public document: string;

  @hasOne(() => Address)
  public address: HasOne<typeof Address>;
}
