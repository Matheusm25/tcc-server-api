import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'day',
    type: 'string',
    required: true,
  },
  {
    name: 'initial_hour',
    type: 'number',
    required: true,
  },
  {
    name: 'finish_hour',
    type: 'number',
    required: true,
  },
];
