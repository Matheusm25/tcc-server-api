export default Object.freeze([
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
]);
