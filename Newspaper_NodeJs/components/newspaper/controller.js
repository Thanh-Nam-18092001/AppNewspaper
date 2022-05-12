const newspaperService = require('../newspaper/service');

const date = require('../../utils/date');

// 1: Lấy danh sách Sản Phẩm
exports.getNewspapers = async () => {
    try {
        let products = await newspaperService.getNewspapers();
        products = products.map((item, index) => {
            item = {
                date: date.format(item.date),
                _id: item._id,
                name: item.name,
                time: item.time,
                category_id: item.category_id,
                contents: item.contents,
                image: item.image,
                index: index + 1
            }
            return item;
        })
        return products;
    } catch (error) {
        return null;
    }
}

// 2: Lấy danh sách Sản Phẩm Theo ID
exports.getNewspaperById = async (id) => {
    try {
        let newspaper = await newspaperService.getNewspaperById(id);
        newspaper = {
            date: date.format(newspaper.date),
            _id: newspaper._id,
            name: newspaper.name,
            time: newspaper.time,
            category_id: newspaper.category_id,
            contents: newspaper.contents,
            image: newspaper.image,
        }
        return newspaper;
    } catch (error) {
        return null;
    }
}

// 3: Thêm Sản Phẩm
exports.insert = async (newspaper) => {
    try {
        await newspaperService.insert(newspaper);
    } catch (error) {
    }
}

// 4: Sửa Sản Phẩm
exports.update = async (id, newspaper) => {
    try {
        await newspaperService.update(id, newspaper);
    } catch (error) {
        return null;
    }
}

// 5: Xóa Sản Phẩm
exports.delete = async (id) => {
    try {
        await newspaperService.delete(id);
    } catch (error) {
        return null;
    }
}