const profileService = require('../services/profile.service');

exports.create = async (req, res) => {
  // TODO: encrypt password
  const { name, username, password, avatar_url } = req.body;

  try {
    const profile = await profileService.create({
      name, username, password, avatar_url
    });
    
    return res.status(201).send(profile);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};
