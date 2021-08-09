import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'name',
    type: 'string',
    required: true,
  },
  {
    name: 'description',
    type: 'string',
  },
  {
    name: 'image',
    type: 'string',
  },
  {
    name: 'price',
    required: true,
    type: 'number',
  },
  {
    name: 'item_category_id',
    type: 'string',
  },
  {
    name: 'truck_id',
    type: 'string',
    required: true,
  },
];
