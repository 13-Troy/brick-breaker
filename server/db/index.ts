import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { Topic } from '../models/topic' 
import { Comment } from '../models/comment' 

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'postgres',
  models: [Topic, Comment]
};

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions);

export async function dbConnect() {
  try {
    await sequelize.authenticate(); 
    await sequelize.sync({ force: true }); // Синхронизация базы данных
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
