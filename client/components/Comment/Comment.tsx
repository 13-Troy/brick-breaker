import React from 'react';
import { CommentBlockSt, AuthorTextBlockST, CommentTextBlockST, CommentTopBlockSt, CommentBottomBlockSt } from '../Comments/style';
import Avatar from '../Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { deleteComment } from '../../store/forum/actions';
import trashIcon from '../../assets/img/trash.png';

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
      <CommentTopBlockSt>
        <AuthorTextBlockST>
          <Avatar backgroundImage={item.ownerAvatar} size={40} /> {item.ownerName}
        </AuthorTextBlockST>
        <CommentTextBlockST>
          {new Date(item.createdAt).toUTCString().substring(0, 22)}
        </CommentTextBlockST>
      </CommentTopBlockSt>
      <CommentTextBlockST> {item.commentText} </CommentTextBlockST>
      <CommentBottomBlockSt>
        {
          user.id === item.ownerId &&
          <div onClick={() => handleDelete(item.topicId, item.commentId)}>
            <img src={trashIcon} />
          </div>
        }
      </CommentBottomBlockSt>
    </CommentBlockSt>
  );
};

export default Comment;
