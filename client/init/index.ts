import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { topicModel, commentModel } from '../models/models';

const sequelizeOptions: SequelizeOptions = {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'newPassword',
    database: 'brick-game-db',
    dialect: 'postgres',
};

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions); 

// Инициализируем модели
export const Topic = sequelize.define('Topic', topicModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});

export async function dbConnect() {
    try {
        await sequelize.authenticate(); // Проверка аутентификации в БД
        await sequelize.sync(); // Синхронизация базы данных
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



