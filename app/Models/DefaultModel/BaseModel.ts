import {
  BaseModel,
  beforeCreate,
  beforeFetch,
  beforeFind,
  column,
  ModelQueryBuilderContract,
} from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import Database from '@ioc:Adonis/Lucid/Database';

import Uuid from '../../services/uuid';

export default class DefaultModel extends BaseModel {
  public static tenant = 'none';

  @column({ isPrimary: true })
  public id: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column.dateTime({ columnName: 'deleted_at' })
  public deletedAt: DateTime;

  @beforeCreate()
  public static generateUuid(entity: DefaultModel) {
    entity.id = entity.id || new Uuid().create();
  }

  @beforeFind()
  public static ignoreDeletedFind(
    query: ModelQueryBuilderContract<typeof BaseModel>,
  ) {
    query.whereNull('deleted_at');
  }

  @beforeFetch()
  public static ignoreDeletedFetch(
    query: ModelQueryBuilderContract<typeof BaseModel>,
  ) {
    query.whereNull('deleted_at');
  }

  public async delete(): Promise<void> {
    const Model = this.constructor;
    await Model.$hooks.exec('before', 'delete', this);

    const now = new Date();
    const query = Database.from(this.constructor.table).where(
      this.constructor.primaryKey,
      this.$primaryKeyValue,
    );

    const updatePromise = query.update({ deleted_at: now });

    await updatePromise;

    await this.constructor.$hooks.exec('after', 'delete', this);
  }
}
