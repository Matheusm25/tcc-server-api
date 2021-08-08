import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

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
