import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ItemCategories extends BaseSchema {
  protected tableName = 'item_categories';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id').notNullable().primary();

      table.string('name').notNullable();
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
