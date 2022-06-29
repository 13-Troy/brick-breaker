import {
  Sequelize,
  SequelizeOptions,
  DataType,
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  NotEmpty,
  HasMany,
  ForeignKey
} from 'sequelize-typescript';

export interface ITopic {
  topicId: number;
  topicName?: string;
  topicText?: string;
  ownerId?: number;
}

export interface IComment {
  commentId: number;
  commentText: string;
  ownerId: number;
  topicId: number;
}
@Table(
  {
    tableName: "Comments",
    timestamps: true,
    updatedAt: false
  }
)
export class Comment extends Model implements IComment {


  @AutoIncrement
  @PrimaryKey
  @ForeignKey(() => Topic)
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

  @ForeignKey(() => Topic)
  @Column
  topicId: number;

};

@Table(
  {
    tableName: "Topics",
    timestamps: true,
    updatedAt: false
  }
)

export class Topic extends Model implements ITopic {

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

  @HasMany(() => Comment, 'topicId')
  comments: Comment[];
};


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
