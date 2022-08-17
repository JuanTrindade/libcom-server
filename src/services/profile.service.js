const database = require('../database');

exports.create = async (profile) => {
  await database('profiles').insert(profile);

  const [newProfile] = await database('profiles')
    .select('*')
    .where({ username: profile.username })
    .limit(1);

  return newProfile;
};
