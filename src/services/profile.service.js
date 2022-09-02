const database = require('../database');

exports.create = async (profile) => {
  const [existingProfile] = await database('profiles')
    .select('*')
    .where({ username: profile.username })
    .limit(1);

  if (existingProfile) {
    throw new Error(`Profile with username ${profile.username} already exists`);
  }

  await database('profiles').insert(profile);
  return profile;
};
