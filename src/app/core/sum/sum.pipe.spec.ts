import { SumPipe } from './sum.pipe';

describe('SumPipe', () => {
  let pipe: SumPipe;

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sum numeric values', () => {
    const items = [{ points: 10 }, { points: 20 }, { points: 15 }];
    const result = pipe.transform(items, 'points');
    expect(result).toBe(45);
  });

  it('should return 0 for null input', () => {
    const result = pipe.transform(null, 'points');
    expect(result).toBe(0);
  });

  it('should return 0 for empty array', () => {
    const result = pipe.transform([], 'points');
    expect(result).toBe(0);
  });

  it('should return 0 for undefined input', () => {
    const result = pipe.transform(undefined, 'points');
    expect(result).toBe(0);
  });
});
