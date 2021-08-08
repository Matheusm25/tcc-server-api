import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ItemCategories extends BaseSchema {
  protected tableName = 'item_categories';

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
