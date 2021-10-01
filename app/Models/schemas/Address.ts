import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'street_name',
    type: 'string',
  },
  {
    name: 'street_number',
    type: 'string',
  },
  {
    name: 'street_add',
    type: 'string',
  },
  {
    name: 'neighborhood',
    type: 'string',
  },
  {
    name: 'zipcode',
    type: 'string',
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
  },
  {
    name: 'state',
    type: 'string',
  },
  {
    name: 'additional_information',
    type: 'string',
  },
];
