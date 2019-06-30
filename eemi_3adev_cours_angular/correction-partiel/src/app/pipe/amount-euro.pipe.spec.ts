import { AmountEuroPipe } from './amount-euro.pipe';

describe('AmountEuroPipe', () => {
  it('create an instance', () => {
    const pipe = new AmountEuroPipe();
    expect(pipe).toBeTruthy();
  });
});
