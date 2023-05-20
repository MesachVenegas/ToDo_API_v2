const SubCategory = require('./subCategories.model');
const Category = require('./categories.model');
const User = require('./users.model');
const Task = require('./tasks.model');

const initModels = () => {
    // Una tarea pertenece a un usuario y un usuario puede tener muchas tareas(1:M).
    Task.belongsTo(User, { foreignKey: 'userId' });
    User.hasMany(Task, { foreignKey: 'userId' });
    // Una tarea pertenece a una categoria y una categoria puede tener muchas tareas(1:M).
    Task.belongsTo(Category, { foreignKey: 'categoryId' });
    Category.hasMany(Task, { foreignKey: 'categoryId' });
    // Una subcategoria pertenece a una tarea y una tarea puede tener muchas subcategorias(1:M).
    SubCategory.belongsTo(Task, { foreignKey: 'taskId' });
    Task.hasMany(SubCategory, { foreignKey: 'taskId' });
    // varias subcategoria pertenecen a una categoria y una categoria puede tener muchas subcategorias(1:M).
    // SubCategory.belongsTo(Category, { foreignKey: 'category_id' });
    // Category.hasMany(SubCategory, { foreignKey: 'category_id' });
}

module.exports = initModels;