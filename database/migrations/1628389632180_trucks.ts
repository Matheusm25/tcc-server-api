import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Trucks extends BaseSchema {
  protected tableName = 'trucks';

  public async up() {
    this.schema.alterTable(this.tableName, table => {
      table.foreign('address_id').references('id').inTable('addresses');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, table => {
      table.dropForeign('address_id');
    });
  }
}
