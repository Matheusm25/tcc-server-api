import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Truck from './Truck';

export default class Schedule extends BaseModel {
  public static tenant = 'Truck';

  @column()
  public day: string;

  @column()
  public initial_hour: number;

  @column()
  public finish_hour: number;

  @column()
  public truck_id: string;

  @belongsTo(() => Truck, { foreignKey: 'truck_id' })
  public truck: BelongsTo<typeof Truck>;
}
