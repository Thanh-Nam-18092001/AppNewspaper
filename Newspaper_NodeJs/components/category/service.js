const categoryModel = require('./model');

// 1: Lấy danh sách Thể Loại
exports.getCategorys = async () => {
    const category = await categoryModel.find({});
    return category;
}

// 2: Lấy danh sách Thể Loại theo ID
exports.getCategoryById = async (id) => {
    return categoryModel.findById(id);
};