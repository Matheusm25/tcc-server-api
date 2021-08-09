import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
  {
    name: 'email',
    required: true,
    type: 'string',
    email: true,
    unique: true,
  },
  {
    name: 'password',
    required: true,
    type: 'string',
  },
  {
    name: 'birth_date',
    required: true,
    type: 'date',
  },
  {
    name: 'address_id',
    type: 'string',
    exists: {
      table: 'addresses',
    },
  },
];
