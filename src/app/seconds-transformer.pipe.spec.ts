import { SecondsTransformerPipe } from './seconds-transformer.pipe';

describe('SecondsTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
