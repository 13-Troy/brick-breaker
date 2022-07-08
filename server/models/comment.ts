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
  ownerName: string;
  ownerAvatar?: string;
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

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  ownerName: string;

  @NotEmpty
  @Column(DataType.STRING)
  ownerAvatar: string;

  @ForeignKey(() => Topic)
  @Column
  topicId: number;
  onDelete: 'cascade'
};
