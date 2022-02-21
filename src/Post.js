import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
  // get the initials of users for the avatar
  const getInitials = (name) => {
    const fullName = name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials;
  };

  return (
    <div className='post' ref={ref}>
      <div className='post__avatar'>
        <Avatar src={avatar}>{getInitials(displayName)}</Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {displayName}{' '}
              <span className='post__headerSpecial'>
                {verified && <VerifiedUserIcon className='post__badge' />}@
                {username}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
});

export default Post;
