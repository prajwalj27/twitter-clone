import React, { useState } from 'react';
import './TweetBox.css';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, 'posts'), {
      displayName: 'Random User',
      username: 'random1234',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: '',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='#'>RU</Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type='text'
            placeholder="What's Happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional: Enter image URL'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
