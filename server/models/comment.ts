import {
  DataType,
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  NotEmpty,
  ForeignKey
} from 'sequelize-typescript';

import { Topic } from './topic' 

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
