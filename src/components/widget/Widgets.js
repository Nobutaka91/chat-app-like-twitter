import { Search } from '@mui/icons-material';
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import './Widget.css';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="Search keyword" type="text" />
      </div>
      <div className="widgets--widgetContainer">
        <h2>What's doing?</h2>
        {/* ライブラリを追加・追記*/}
        <TwitterTweetEmbed tweetId={'1680191609223405569'} />
        {/*idは自分のTwitterのを使用*/}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Otamasan8Nob"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://twitter.com/Otamasan8Nob'}
          options={{ text: '#react.js勉強中', via: 'Kou_Ackerman' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
