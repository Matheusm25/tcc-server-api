import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Items extends BaseSchema {
  protected tableName = 'items';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id').notNullable().primary();

      table.string('name').notNullable();
      table.string('description');
      table.string('image');
      table.decimal('price', 5, 2).notNullable();
      table.string('item_category_id');
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
