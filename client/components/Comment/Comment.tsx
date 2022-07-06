import React from 'react';
import { CommentBlockSt, AuthorTextBlockST, CommentTextBlockST, CommentTopBlockSt, CommentBottomBlockSt } from '../Comments/style';
import Avatar from '../Avatar';
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7H15Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        }
      </CommentBottomBlockSt>
    </CommentBlockSt>
  );
};

export default Comment;
