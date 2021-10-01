import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses';

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table.string('additional_information');

      table.string('street_name').nullable().alter();
      table.string('street_number').nullable().alter();
      table.string('street_name').nullable().alter();
      table.string('street_add').nullable().alter();
      table.string('neighborhood').nullable().alter();
      table.string('zipcode').nullable().alter();
      table.string('city').nullable().alter();
      table.string('state').nullable().alter();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.dropColumn('additional_information');

      table.string('street_name').notNullable().alter();
      table.string('street_number').notNullable().alter();
      table.string('street_name').notNullable().alter();
      table.string('street_add').notNullable().alter();
      table.string('neighborhood').notNullable().alter();
      table.string('zipcode').notNullable().alter();
      table.string('city').notNullable().alter();
      table.string('state').notNullable().alter();
    });
  }
}
