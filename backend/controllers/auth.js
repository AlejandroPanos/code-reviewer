/* Create imports */

/* Create controllers */
exports.register = async (req, res) => {
  try {
    res.status(200).json({ msg: "register" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    res.status(200).json({ msg: "login" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ msg: "logout" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.currentProfile = async (req, res) => {
  try {
    res.status(200).json({ msg: "current user" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
