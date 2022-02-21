import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={'1492200380750569480'} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='prajwalj27'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://www.linkedin.com/in/prajwal-jaiswal/'}
          options={{ text: '#ReactJs is Amazing!!!', via: 'prajwalj27' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
