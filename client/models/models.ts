import { DataType, Model } from 'sequelize-typescript';
import { ModelAttributes } from 'sequelize/types';

export interface ITopic {
  topicId: number;
  topicName: string;
  topicText: string;
  date: number;
  ownerId: number;
}

export interface IComment {
  commentId: number;
  commentText: string;
  ownerId: number;
  date: number;
  topic: number;
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  topicId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  topicName: {
    type: DataType.STRING,
  },
  topicText: {
    type: DataType.STRING,
  },
  date: {
    type: DataType.DATE,
  },
  ownerId: {
    type: DataType.INTEGER,
  }
};

export const commentModel: ModelAttributes<Model, IComment> = {
  commentId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  commentText: {
    type: DataType.STRING,
  },
  ownerId: {
    type: DataType.INTEGER,
  },
  date: {
    type: DataType.DATE,
  },
  topic: {
    type: DataType.INTEGER,
  }
};

