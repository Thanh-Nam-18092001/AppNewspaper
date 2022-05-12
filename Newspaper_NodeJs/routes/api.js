var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const adminController = require('../components/admin/controller');
const newspaperController = require('../components/newspaper/controller');

// ========================== ADMIN =================================
/**
 * 1
 * http://localhost:3000/api/admin/login
 * method: post
 * desc: tiến hành đăng nhập ADMIN
 */
router.post("/admin/login", async function (req, res, next) {
    const { username, password } = req.body;
    // tiến hành đăng nhập
    const admin = await adminController.login(username, password);
    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
    if (admin) {
        // lưu thông tin login vào session
        const token = jwt.sign({ id: admin._id, username: admin.username }, 'mykey');
        res.json({ status: true, id: admin._id, username: admin.username, token });
    } else {
        res.json({ status: false })
    }
});

/**
 * 2
 * http://localhost:3000/api/admin/register
 * method: post
 * desc: tiến hành đăng ký ADMIN
 */
router.post("/admin/register", async function (req, res, next) {
    const { username, password, comfirm_password } = req.body;

    // tiến hành đăng nhập
    const admin = await adminController.register(username, password, comfirm_password);

    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
    if (admin) {
        res.json({ status: true });
    } else {
        res.json({ status: false });
    }
});

// =========================== Sản Phẩm ================================
/**
 * http://localhost:3000/api/newspaper
 * method: get
 * desc: hiển thị danh sách sản phẩm
 */
 router.get("/newspaper", async function (req, res, next) {
    const newspaper = await newspaperController.getNewspapers();
    res.json(newspaper);
});

//================== Sửa Sản Phẩm =======================
/**
 * http://localhost:3000/api/newspaper/:id/detail
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
router.get("/newspaper/:id/detail", async function (req, res, next) {
    const { id } = req.params;
    const newspaper = await newspaperController.getNewspaperById(id);
    res.json(newspaper);
});
module.exports = router;

/**
 * ========================== LINK =======================
 * 1: ADMIN
 * 1.1: http://localhost:3000/api/admin/login
 * 1.2: http://localhost:3000/api/admin/register
 */