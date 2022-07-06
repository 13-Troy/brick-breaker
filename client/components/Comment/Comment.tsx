import React from 'react';
import { CommentBlockSt, AuthorTextBlockST, CommentTextBlockST } from '../Comments/style';
import Avatar from '../Avatar';
import Title from '../Title';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { deleteComment } from '../../store/forum/actions';

interface CommentsProps {
  item: any;
}

const Comment = (props: CommentsProps) => {
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const user = useSelector((state: any) => state.user);

  const handleDelete = (topicId: number, commentId: number) => {
    if (window.confirm("Вы действительно хотите удалить комментрий?")) {
      dispatch(deleteComment(topicId, commentId))
    }
  }
  const item = props.item
  return (
    <CommentBlockSt>
      <AuthorTextBlockST>
        <Avatar backgroundImage={item.ownerAvatar} size={40} /> {item.ownerName}
      </AuthorTextBlockST>
      <CommentTextBlockST>
        {new Date(item.createdAt).toUTCString().substring(0, 22)}
      </CommentTextBlockST>
      <CommentTextBlockST>
        <Title h={4}>{item.commentText}</Title>
      </CommentTextBlockST>
      {
        user.id === item.ownerId &&
        <div onClick={() => handleDelete(item.topicId, item.commentId)}> удалить </div>
      }
    </CommentBlockSt>
  );
};

export default Comment;
