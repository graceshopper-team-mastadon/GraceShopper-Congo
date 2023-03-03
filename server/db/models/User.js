const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM("ADMIN", "MEMBER"),
    defaultValue: "MEMBER",
  },
});

User.prototype.corretPassword = function (passedPassword) {
  // Comparing the "passed Password" to the actual password
  return bcrypt.compare(passedPassword, this.password);
};
// Generating a new token if other one expired
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, "test");
};
// Finding User by Token

User.byToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, "test"); /* test = password */
    const user = User.findByPk(id);
    if (!user) {
      throw new error(401);
    }
    return user;
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
  }
};

User.getId = async function (token) {
  try {
    const { id } = await jwt.verify(token.token, "test");
    return id;
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
  }
};

// authenticating the User name and password connection
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.corretPassword(password))) {
    const errMsg = Error("Incorrect Username or Password");
    errMsg.status = 401;
    throw errMsg;
  }
  return user.generateToken();
};
User.Verify = async function ({ token }) {
  if (jwt.verify(token, "test")) {
    return true;
  } else {
    return false;
  }
};

// Hooks to hash the password after a new user is created

const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
};

// Hooks to make this happen on creation :D

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);

module.exports = User;
