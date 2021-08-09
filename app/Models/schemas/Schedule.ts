import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'day',
    type: 'string',
    required: true,
  },
  {
    name: 'initial_hour',
    type: 'string',
    required: true,
  },
  {
    name: 'finish_hour',
    type: 'string',
    required: true,
  },
  {
    name: 'truck_id',
    type: 'string',
    required: true,
  },
];
