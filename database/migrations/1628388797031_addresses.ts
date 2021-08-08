import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id').notNullable().primary();

      table.string('street_name').notNullable();
      table.string('street_number', 50).notNullable();
      table.string('street_add').notNullable();
      table.string('neighborhood').notNullable();
      table.string('zipcode', 9).notNullable();
      table.decimal('lat', 10, 8);
      table.decimal('long', 11, 8);
      table.string('city').notNullable();
      table.string('state', 2).notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
      table.timestamp('deleted_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
