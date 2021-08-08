import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Schedules extends BaseSchema {
  protected tableName = 'schedules';

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table.foreign('truck_id').references('id').inTable('trucks');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.dropForeign('truck_id');
    });
  }
}
