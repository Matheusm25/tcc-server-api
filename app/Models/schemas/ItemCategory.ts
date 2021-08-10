import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
  {
    name: 'truck_id',
    required: true,
    type: 'string',
    exists: {
      table: 'trucks',
    },
  },
];
