const register = require("./register");
const login = require("./login");
const logout = require("./logout")
const getCurrent = require("../auth/getCurrent");
const updateAvatar = require("./updateAvatar")

module.exports = {
    register,
    login,
    logout, getCurrent, updateAvatar
}