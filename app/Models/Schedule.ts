import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Truck from './Truck';

export default class Schedule extends BaseModel {
  @column()
  public day: string;

  @column()
  public initial_hour: number;

  @column()
  public finish_hour: number;

  @column()
  public truck_id: string;

  @hasOne(() => Truck)
  public truck: HasOne<typeof Truck>;
}
