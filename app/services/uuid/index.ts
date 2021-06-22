import uuid from 'node-uuid';

export default class UUIDService {
  public create() {
    try {
      return uuid.v4();
    } catch (err) {
      throw new Error(err);
    }
  }
}
