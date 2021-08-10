import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'email',
    required: true,
    type: 'string',
    email: true,
    unique: true,
  },
  {
    name: 'password',
    type: 'string',
    required: true,
  },
  {
    name: 'name',
    type: 'string',
    required: true,
  },
  {
    name: 'description',
    type: 'string',
    required: true,
  },
  {
    name: 'additional_information',
    type: 'string',
  },
  {
    name: 'address_id',
    type: 'string',
    exists: {
      table: 'addresses',
    },
  },
  {
    name: 'document',
    type: 'string',
    required: true,
  },
];
