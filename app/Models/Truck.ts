import {
  beforeSave,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm';

import BaseModel from './DefaultModel/BaseModel';
import Address from './Address';
import Hash from '@ioc:Adonis/Core/Hash';
import Schedule from './Schedule';

export default class Truck extends BaseModel {
  @column()
  public email: string;

  @column({ serializeAs: null })
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

  @hasMany(() => Schedule, { foreignKey: 'truck_id' })
  public schedules: HasMany<typeof Schedule>;

  @belongsTo(() => Address, { foreignKey: 'address_id' })
  public address: BelongsTo<typeof Address>;

  @beforeSave()
  public static async hashPassword(truck: Truck) {
    if (truck.$dirty.password) {
      truck.password = await Hash.make(truck.password);
    }
  }
}
