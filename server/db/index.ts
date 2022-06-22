import { Sequelize, SequelizeOptions, AutoIncrement, PrimaryKey, AllowNull, NotEmpty } from 'sequelize-typescript';
import { DataType, Model, Table, Column, BelongsTo} from 'sequelize-typescript';

export interface ITopic {
  topicId: number;
  topicName: string;
  topicText: string;
  ownerId: number;
}

export interface IComment {
  commentId: number;
  commentText: string;
  ownerId: number;
  date: number;
  topic: number;
}

@Table(
  {
      tableName: "Topics",
      timestamps: true
  }
)

class Topic extends Model implements ITopic  {

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  topicId: number;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  topicName: string;  

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  topicText: string; 

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.INTEGER)
  ownerId: number
};

@Table(
  {
      tableName: "Comments",
      timestamps: true
  }
)
class Comment extends Model implements IComment  {
  
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  commentId: number;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  commentText: string;  

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.INTEGER)
  ownerId: number; 

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.DATE)
  date: number

  @BelongsTo(() => Topic, 'topicId')
  topic: number

};

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'brick-game-db',
  dialect: 'postgres',
  models:[Topic, Comment]
};

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions); 

export async function dbConnect() {
    try {
        await sequelize.authenticate(); // Проверка аутентификации в БД
        await sequelize.sync({ force: true }); // Синхронизация базы данных
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
