import React from 'react';
import { CommentBlockSt } from '../Comments/style';

interface CommentsProps {
  item: any;
}

const Comment = (props: CommentsProps) => {
  const item = props.item
  return (
          <CommentBlockSt>
            <div>
              {item.commentText}
            </div>
            <div>
              Автор {item.ownerId}
            </div>
          </CommentBlockSt>
  );
};

export default Comment;
