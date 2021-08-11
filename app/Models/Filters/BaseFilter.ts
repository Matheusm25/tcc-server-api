import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm';
import DefaultModel from '../DefaultModel/BaseModel';

export default class BaseFilter {
  constructor({ Model, query, field, operation, value }) {
    this.model = Model;
    this.query = query;
    this.field = field;
    this.operation = operation;
    this.value = value;
  }

  public model: typeof DefaultModel;
  public query: ModelQueryBuilderContract<typeof DefaultModel>;
  public field: string;
  public operation: string;
  public value: string | Array<string>;

  public withBaseRules() {
    return true;
  }

  public rule() {
    return true;
  }

  protected _baseRules() {
    return typeof this.field !== 'undefined';
  }

  public check() {
    let baseRules = this.withBaseRules() ? this._baseRules() : true;
    return baseRules && this.rule();
  }

  public apply() {
    return this.query.where(this.field, this.operation, this.value);
  }
}
