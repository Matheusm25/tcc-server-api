import { beforeSave, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import Hash from '@ioc:Adonis/Core/Hash';

import BaseModel from './DefaultModel/BaseModel';
import { DateTime } from 'luxon';
import Address from './Address';

export default class User extends BaseModel {
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

  @hasOne(() => Address)
  public address: HasOne<typeof Address>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
