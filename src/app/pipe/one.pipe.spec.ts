import { OnePipe } from './one.pipe';

describe('OnePipe', () => {
  let pipeToTest: OnePipe;

  // synchronous beforeEach
  beforeEach(() => {
    pipeToTest = new OnePipe();
  });
  it('create an instance', () => {
    expect(pipeToTest.transform('1')).toBe('1');
    expect(pipeToTest.transform('a')).toBe('a');
    expect(pipeToTest.transform('A')).toBe('a');
    expect(pipeToTest.transform('AA')).toBe('aa');
  });
});
