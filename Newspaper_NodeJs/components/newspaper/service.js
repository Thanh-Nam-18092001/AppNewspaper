const newspaperModel = require('./model');

// 1: Lấy danh sách Sản Phẩm
 exports.getNewspapers = async () => {
    // return data;
    return await newspaperModel.find().populate('category_id');
 }

// 2: Lấy danh sách Sản Phẩm theo ID
exports.getNewspaperById = async (id) => {
    const newspaper = await newspaperModel.findById(id).populate('category_id');
    return newspaper;
};

// 3: Thêm mới Sản Phẩm
exports.insert = async (newspaper) => {
    const p = new newspaperModel(newspaper);
    await p.save();
}

// 4: Sửa Sản Phẩm
exports.update = async (id, newspaper) => {
    await newspaperModel.findByIdAndUpdate(id, newspaper);
}

// 5: Xóa Sản Phẩm
exports.delete = async (id) => {
    await newspaperModel.findByIdAndDelete(id);

}