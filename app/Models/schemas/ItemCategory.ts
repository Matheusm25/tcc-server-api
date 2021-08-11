import MetaColumnValidation from 'App/interfaces/Model/Meta/MetaColumnValidation';

export default (): Array<MetaColumnValidation> => [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
];
