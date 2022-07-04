import {
  DataType,
  Model,
  Table,
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
  ownerName?: string;
  ownerAvatar: string;
}

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

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  ownerName: string;

  @NotEmpty
  @Column(DataType.STRING)
  ownerAvatar: string;

  @HasMany(() => Comment, 'topicId')
  comments: Comment[];
};
