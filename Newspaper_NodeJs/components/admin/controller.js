const adminService = require("./service");
const bcrypt = require("bcryptjs");

/**
 * 1: Đăng nhập ADMIN 
 */
exports.login = async (username, password) => {
    try {
        const admin = await adminService.login(username);
        if (!admin) return null;
        const checkPassword = await bcrypt.compare(password, admin.password);
        if (!checkPassword) { return null; }
        return { _id: admin._id, username: admin.username }
    } catch (error) {
        return null;
    }
};

/**
 * 2: Đăng ký ADMIN
 */
exports.register = async (username, password, confirm_password) => {
    let admin = await adminService.login(username);
    if (admin) { return null }
    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    admin = await adminService.register(username, hash);
    return { _id: admin.id };
};