const database = require('../../../src/database');
const profileService = require('../../../src/services/profile.service');

describe('Testing profile service', () => {
  beforeAll(async () => {
    await database('profiles').delete();
  });

  afterEach(async () => {
    await database('profiles').delete();
  });

  describe('.create', () => {
    it('registers a profile if it does not exists', async () => {
      const dummyProfile = { name: 'Test', username: 'test', password: '123' };

      const subject = await profileService.create(dummyProfile);

      expect(subject).not.toBeNull();
      expect(subject.name).toBe('Test');
      expect(subject.username).toBe('test');
    });

    it('does not register two profiles with the same username', async () => {
      const dummyProfile = { name: 'Test', username: 'test', password: '123' };

      await profileService.create(dummyProfile);

      return expect(() => profileService.create(dummyProfile)).rejects.toThrow();
    });
  });
});
