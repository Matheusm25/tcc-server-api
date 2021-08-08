import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Truck from './Truck';
import User from './User';

export default class FavoriteTruck extends BaseModel {
  @column()
  public truck_id: string;

  @column()
  public user_id: string;

  @hasOne(() => Truck)
  public truck: HasOne<typeof Truck>;

  @hasOne(() => User)
  public user: HasOne<typeof User>;
}
