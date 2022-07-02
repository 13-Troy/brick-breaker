import {
  DataType,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  NotEmpty,
  HasMany,
} from 'sequelize-typescript';

import { Comment } from './comment' 
  
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
