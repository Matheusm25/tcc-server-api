import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Items extends BaseSchema {
  protected tableName = 'items';

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table
        .foreign('item_category_id')
        .references('id')
        .inTable('item_categories');
      table.foreign('truck_id').references('id').inTable('trucks');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.dropForeign('item_category_id');
      table.dropForeign('truck_id');
    });
  }
}
