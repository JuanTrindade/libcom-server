const profileService = require('../services/profile.service');

exports.create = async (req, res) => {
  // TODO: encrypt password
  const { name, username, password, avatar_url } = req.body;

  // TODO: check if profile already exists. If it does, throw an error.
  const profile = await profileService.create({
    name, username, password, avatar_url
  });

  return res.status(201).send(profile);
};
