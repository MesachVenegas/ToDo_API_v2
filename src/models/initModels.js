const User = require('./users.model');
const Category = require('./categories.model');
const SubCategory = require('./subCategories.model');
const Task = require('./tasks.model');

const initModels = () => {
    // Una tarea pertenece a un usuario y un usuario puede tener muchas tareas(1:M).
    Task.belongsTo(User, { foreignKey: 'user_id' });
    User.hasMany(Task, { foreignKey: 'user_id' });
    // Una tarea pertenece a una categoria y una categoria puede tener muchas tareas(1:M).
    Task.belongsTo(Category, { foreignKey: 'category_id' });
    Category.hasMany(Task, { foreignKey: 'category_id' });
    // Una subcategoria pertenece a una tarea y una tarea puede tener muchas subcategorias(1:M).
    SubCategory.belongsTo(Task, { foreignKey: 'task_id' });
    Task.hasMany(SubCategory, { foreignKey: 'task_id' });
    // varias subcategoria pertenecen a una categoria y una categoria puede tener muchas subcategorias(1:M).
    // SubCategory.belongsTo(Category, { foreignKey: 'category_id' });
    // Category.hasMany(SubCategory, { foreignKey: 'category_id' });
}

module.exports = initModels;