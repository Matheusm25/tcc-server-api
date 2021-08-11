import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'truck_id',
    type: 'string',
    required: true,
    exists: {
      table: 'trucks',
    },
  },
];
