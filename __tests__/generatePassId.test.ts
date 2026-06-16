import {generatePassId} from '../src/utils/generatePassId';

describe('generatePassId', () => {
  it('returns an NCA pass id', () => {
    const passId = generatePassId();
    expect(passId).toMatch(/^NCA-\d{4}$/);
  });
});
