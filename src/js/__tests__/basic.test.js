import ErrorRepository, { errorMap } from '../app';

errorMap.set(1, 'blablabla');
errorMap.set(2, 'tramtramtram');
test('should add new error and read text of another error', () => {
  const Err = new ErrorRepository(3, 'test');
  const equalData = 'test';
  expect(Err).toEqual({});
  expect(ErrorRepository.translate(3)).toEqual(equalData);
});

test('should not find error by code', () => {
  const equalData = 'Unknown error';
  expect(ErrorRepository.translate(5)).toEqual(equalData);
});
