import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class FavoriteTrucks extends BaseSchema {
  protected tableName = 'favorite_trucks';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id').primary();

      table.string('user_id').notNullable();
      table.string('truck_id').notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
      table.timestamp('deleted_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
