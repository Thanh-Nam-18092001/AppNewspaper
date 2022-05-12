/**
 *  Tầng giao tiếp database ADMIN
 */
const adminModel = require('./model');

/**
 * 1: Đăng nhập ADMIN
 */
exports.login = async (username) => {
    const admin = await adminModel.findOne({ username: username }, 'id email password');
    return admin;
};

/**
 * 2: Đăng ký ADMIN
 */
exports.register = async (username, password) => {
    const admin = new adminModel({ username, password });
    return await admin.save();
}