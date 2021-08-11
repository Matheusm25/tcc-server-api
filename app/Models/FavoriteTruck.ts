import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Truck from './Truck';
import User from './User';

export default class FavoriteTruck extends BaseModel {
  public static tenant = 'User';

  @column()
  public truck_id: string;

  @column()
  public user_id: string;

  @belongsTo(() => Truck, { foreignKey: 'truck_id' })
  public truck: BelongsTo<typeof Truck>;

  @belongsTo(() => User, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof User>;
}
