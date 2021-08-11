import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Truck from './Truck';

export default class ItemCategory extends BaseModel {
  public static tenant = 'Truck';

  @column()
  public name: string;

  @column()
  public truck_id: string;

  @belongsTo(() => Truck, { foreignKey: 'truck_id' })
  public truck: BelongsTo<typeof Truck>;
}
