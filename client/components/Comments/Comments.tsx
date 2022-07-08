import React from 'react';
import Title from '../../components/Title';
import { CommentsBlockSt } from './style';
import Comment from '../Comment/Comment';

interface CommentsProps {
  comments: Array<Record<string, string>>;
}

const Comments = (props: CommentsProps) => {
  const comments = props.comments
  return (
    <>
      <Title h={4}>Комментарии</Title>
      <CommentsBlockSt>
        {comments && comments.map((item: any, i) => (
          <Comment key={i} item={item} />
        ))}
      </CommentsBlockSt>
    </>
  );
};

export default Comments;
