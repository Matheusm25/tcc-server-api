import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import ItemCategory from './ItemCategory';
import Truck from './Truck';

export default class Item extends BaseModel {
  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public image: string;

  @column()
  public price: number;

  @column()
  public item_category_id: string;

  @column()
  public truck_id: string;

  @hasOne(() => Truck)
  public truck: HasOne<typeof Truck>;

  @hasOne(() => ItemCategory)
  public itemCategory: HasOne<typeof ItemCategory>;
}
