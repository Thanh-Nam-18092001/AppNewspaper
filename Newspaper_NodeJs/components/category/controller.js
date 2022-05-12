const categoryService = require('../category/service');

// 1: Lầy dữ liệu Thể Loại
exports.getCategorys = async () => {
    const data = await categoryService.getCategorys();
    return data;
}

// 2: Lấy danh sách Thể Loại
exports.getCategoriesSelected = async (id) => {
    let data = await categoryService.getCategorys();
    data = data.map((item, index) => {
        item = {
            _id: item._id,
            name: item.name,
            index: index + 1,
        }
        return item;
    })
    return data;
}