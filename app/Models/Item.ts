import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import ItemCategory from './ItemCategory';
import Truck from './Truck';

export default class Item extends BaseModel {
  public static tenant = 'Truck';

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

  @belongsTo(() => Truck, { foreignKey: 'truck_id' })
  public truck: BelongsTo<typeof Truck>;

  @belongsTo(() => ItemCategory, { foreignKey: 'item_category_id' })
  public itemCategory: BelongsTo<typeof ItemCategory>;
}
