import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'street_name',
    required: true,
    type: 'string',
  },
  {
    name: 'street_number',
    type: 'string',
    required: true,
  },
  {
    name: 'street_add',
    type: 'string',
  },
  {
    name: 'neighborhood',
    required: true,
    type: 'string',
  },
  {
    name: 'zipcode',
    type: 'string',
    required: true,
  },
  {
    name: 'lat',
    type: 'number',
  },
  {
    name: 'long',
    type: 'number',
  },
  {
    name: 'city',
    type: 'string',
    required: true,
  },
  {
    name: 'state',
    type: 'string',
    required: true,
  },
];
