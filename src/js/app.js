export const errorMap = new Map();
export default class ErrorRepository {
  constructor(code, description) {
    errorMap.set(code, description);
  }

  static translate(code) {
    const objError = errorMap.get(code);
    return (objError || 'Unknown error');
  }
}
