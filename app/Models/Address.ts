import { column } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';

export default class Address extends BaseModel {
  public static tenant = 'none';

  @column()
  public street_name: string;

  @column()
  public street_number: string;

  @column()
  public street_add: string;

  @column()
  public neighborhood: string;

  @column()
  public zipcode: string;

  @column()
  public lat: number;

  @column()
  public long: number;

  @column()
  public city: string;

  @column()
  public state: string;

  @column()
  public additional_information: string;
}
