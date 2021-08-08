import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Truck from './Truck';

export default class ItemCategory extends BaseModel {
  @column()
  public name: string;

  @column()
  public truck_id: string;

  @hasOne(() => Truck)
  public truck: HasOne<typeof Truck>;
}
