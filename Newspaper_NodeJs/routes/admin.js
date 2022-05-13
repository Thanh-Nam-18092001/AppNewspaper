/**
 * Đường dẫn ADMIN
 */
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const adminController = require("../components/admin/controller");
/**
 * 1: http://localhost:3000/login
 * method: get
 * desc: Hiển thị trang đăng nhập ADMIN
 */
router.get("/", function (req, res, next) {
  res.render("login");
});

/**
 * 2: http://localhost:3000/login
 * method: post
 * desc: Tiến hành đăng nhập ADMIN
 */
router.post("/", async function (req, res, next) {
  const { username, password } = req.body;
  const admin = await adminController.login(username, password);
  if (admin) {
    const token = jwt.sign({ id: admin._id, username: admin.username }, 'mykey');
    req.session.token = token;
    res.redirect("/newspaper");
  } else {
    res.redirect("/login");
  }
});

/**
 * 3: http://localhost:3000/admin/register
 * method: get
 * desc: Hiển thị trang đăng ký ADMIN
 */
router.get("/register", function (req, res, next) {
  res.render("register");
});

/**
 * 4: http://localhost:3000/admin/register
 * method: post
 * desc: Tiến hành đăng ký ADMIN
 */
router.post("/register", async function (req, res, next) {
  const { username, password, confirm_password } = req.body;
  const admin = await adminController.register(username, password, confirm_password);
  if (admin) {
    const token = jwt.sign({ id: admin._id, username: admin.username }, 'mykey');
    req.session.token = token;
    res.redirect("/login");
  } else {
    res.redirect("/register");
  }
});

/**
 * http://localhost:3000/admin/log-out
 * method: post
 * desc: tiến hành đăng xuất
 */
router.get("/log-out", async function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

module.exports = router;

/**
 * ====================== LINK ===================
 * 1: http://localhost:3000/admin/login
 * 2: http://localhost:3000/admin/register
 * 3: http://localhost:3000/admin/dang-xuat
 */
