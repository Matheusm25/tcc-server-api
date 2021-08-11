import {
  beforeSave,
  BelongsTo,
  belongsTo,
  column,
} from '@ioc:Adonis/Lucid/Orm';
import Hash from '@ioc:Adonis/Core/Hash';

import BaseModel from './DefaultModel/BaseModel';
import { DateTime } from 'luxon';
import Address from './Address';

export default class User extends BaseModel {
  public static tenant = 'none';

  @column()
  public name: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column.dateTime()
  public birth_date: DateTime;

  @column()
  public address_id: string;

  @belongsTo(() => Address, { foreignKey: 'address_id' })
  public address: BelongsTo<typeof Address>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
