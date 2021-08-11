import InFilter from './InFilter';
import BooleanFilter from './BooleanFilter';
import DefaultFilter from './DefaultFilter';

const FilterOrder = [InFilter, BooleanFilter, DefaultFilter];

const setFilter = (query, Model, { field, operation, value }) => {
  let keeptesting = true;
  FilterOrder.map(Filter => {
    const CheckFilter = new Filter({
      Model,
      query,
      field,
      operation,
      value,
    });

    if (CheckFilter.check() && keeptesting) {
      query = CheckFilter.apply();
      keeptesting = false;
    }
  });

  return query;
};

function applyFilter(query, Model, { field, operation, value }) {
  const fields = field ? field.split('.') : false;

  if (!fields || fields.length === 1) {
    return setFilter(query, Model, { field, operation, value });
  } else {
    const [entity, ...newfields] = fields;
    return query.whereHas(
      entity,
      builder => {
        return applyFilter(builder, Model, {
          field: newfields.join('.'),
          operation,
          value,
        });
      },
      '>',
      0,
    );
  }
}

export default applyFilter;
