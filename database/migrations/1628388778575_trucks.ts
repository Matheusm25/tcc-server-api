import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Trucks extends BaseSchema {
  protected tableName = 'trucks';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id').primary();

      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('name').unique().notNullable();
      table.string('description').notNullable();
      table.string('additional_information');
      table.string('document').notNullable();
      table.string('address_id');

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
      table.timestamp('deleted_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
