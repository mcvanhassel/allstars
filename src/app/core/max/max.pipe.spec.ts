import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
  let pipe: MaxPipe;

  beforeEach(() => {
    pipe = new MaxPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return items with max value', () => {
    const items = [{ points: 10 }, { points: 20 }, { points: 15 }];
    const result = pipe.transform(items, 'points');
    expect(result).toEqual([{ points: 20 }]);
  });

  it('should return multiple items if they have the same max value', () => {
    const items = [{ points: 20 }, { points: 10 }, { points: 20 }];
    const result = pipe.transform(items, 'points');
    expect(result).toEqual([{ points: 20 }, { points: 20 }]);
  });

  it('should return empty array for null input', () => {
    const result = pipe.transform(null, 'points');
    expect(result).toEqual([]);
  });

  it('should return empty array for undefined input', () => {
    const result = pipe.transform(undefined, 'points');
    expect(result).toEqual([]);
  });
});
