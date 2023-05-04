const fs = require("fs");
const path = require("path");
const { dirname } = require("path");
const BadRequest = require("../errors/bad-request");

function getAllUsers(req, res, next) {
  const appDir = dirname(require.main.filename);
  const filePath = path.join(appDir, "daasasta", "users.json");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return next(new BadRequest(err.message));
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
}

module.exports = {
  getAllUsers,
};
