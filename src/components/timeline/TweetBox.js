import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';
import './TweetBox.css';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    /* firebaseのデータベースにデータを追加する。*/
    e.preventDefault(); /*tweetボタンを押したときに画面リロードするのを防ぐ*/
    addDoc(collection(db, 'posts'), {
      displayName: 'Kou',
      username: 'Kou_Ackerman',
      verified: true,
      text: tweetMessage,
      // avatar: 'http://shincode.info/wp-content/uploads/2021/12/icon.png',
      // avatar: 'https://uploda1.ysklog.net/uploda/78e4a2c1a4.png',
      // avatar: './logo512.png',
      avatar: 'https://ul.h3z.jp/Q9vOUYFd.jpg',
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="What happening ?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="Please input the image URL."
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox--tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
