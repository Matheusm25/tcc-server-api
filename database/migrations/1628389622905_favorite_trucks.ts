import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class FavoriteTrucks extends BaseSchema {
  protected tableName = 'favorite_trucks';

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table.foreign('truck_id').references('id').inTable('trucks');
      table.foreign('user_id').references('id').inTable('users');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.dropForeign('truck_id');
      table.dropForeign('user_id');
    });
  }
}
