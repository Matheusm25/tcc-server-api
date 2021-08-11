'use strict';

import BaseFilter from './BaseFilter';

export default class InFilter extends BaseFilter {
  public value: Array<string>;

  public rule() {
    return this.operation.toLowerCase() === 'in';
  }

  public apply() {
    return this.query.whereIn(this.field, this.value);
  }
}
