var express = require('express');
var router = express.Router();

const newspaperController = require("../components/newspaper/controller");
const categoryController = require("../components/category/controller");

const authentication = require('../middle/authentiaction');
const upload = require("../middle/upload");

const newspaperModel = require('../components/newspaper/model');

/**
 * http://localhost:3000/newspaper
 * method: get
 * desc: hiển thị danh sách sản phẩm
 */
router.get("/", async function (req, res, next) {
  const name = req.query.name
  if (name) {
    newspaperModel.find({ name: { $regex: ".*" + name + ".*" } }).populate('category_id')
      .then(newspapers => {
        res.render("newspaper", { newspapers: newspapers });
      })
  }
  else {
    const data = await newspaperController.getNewspapers();
    res.render("newspaper", { newspapers: data });
  }
});

// ==================== Sản Phẩm ====================
/**
 * http://localhost:3000/newspaper
 * method: post
 * desc: thêm mới 1 sản phẩm
 * middleware: tần trung gian sử lý tất cả thao tác trước khi vô hàm ở trong (up hình ,bắt lỗi ,ktra login....)
 */
router.post("/", [upload.single('image')], async function (req, res, next) {
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://192.168.1.21:3000/images/${file.filename}`
  }
  body = { ...body, image }
  await newspaperController.insert(body);

  res.redirect("/newspaper");
});

//===================== Thêm Mới Sản Phảm ==================
/**
 * http://localhost:3000/newspaper/newspaper_insert
 * method: get
 * desc: hiển thị trang them mới sản phẩm
 */
router.get("/newspaper_insert", async function (req, res, next) {
  const categories = await categoryController.getCategorys();
  res.render("newspaper_insert", { categories: categories });
});

//================== Sửa Sản Phẩm =======================
/**
 * http://localhost:3000/newspaper/:id/edit
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
router.get("/:id/edit", async function (req, res, next) {
  const { id } = req.params;
  const newspaper = await newspaperController.getNewspaperById(id);
  const categories = await categoryController.getCategoriesSelected(newspaper.category_id._id);
  res.render("newspaper_edit", { newspaper: newspaper, categories: categories });
});

//=============== Cập nhật sản phẩm ===================
/**
 * http://localhost:3000/newspaper/:id/edit
 * method: post
 * desc: Cập nhật sản phẩm
 */
router.post("/:id/edit", [upload.single('image')], async function (req, res, next) {

  let { body, file, params } = req;
  delete body.image;
  if (file) {
    let image = `http://192.168.1.21:3000/images/${file.filename}`
    body = { ...body, image }
  }
  await newspaperController.update(params.id, body);
  res.redirect('/newspaper');
});

//=============== Xóa Sản Phẩm ========================
/**
 * http://localhost:3000/newspaper/:id/delete
 * method: delete
 * desc: xóa 1 sản phẩm
 */
router.delete("/:id/delete", async function (req, res, next) {
  // xóa 1 sản phẩm
  const { id } = req.params;
  await newspaperController.delete(id);

  res.json({ result: true });
  // trả về kết quả xóa

});

module.exports = router;