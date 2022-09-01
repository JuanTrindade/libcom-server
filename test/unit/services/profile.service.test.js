const profileService = require('../../../src/services/profile.service');

describe('Testing profile service', () => {
  describe('.create', () => {
    it('registers a profile if it does not exists', async () => {
      // prepare the test
      const dummyProfile = { name: 'Test', username: 'test', password: '123' };

      // execute subject
      const subject = await profileService.create(dummyProfile);

      // asserts
      expect(subject).not.toBeNull();
      expect(subject.name).toBe('Test');
      expect(subject.username).toBe('test');
    });

    it.todo('does not register two profiles with the same username');
  });
});
