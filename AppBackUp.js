import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [captionInput, setCaptionInput] = useState('');


  const iPost = (event) => {
    if (titleInput.trim() !== '' && captionInput.trim() !== '') {
      setPosts([...posts, { title: titleInput, caption: captionInput }]);
      setTitleInput('');
      setCaptionInput('');
    }
  };
  

  const handleTitleChange = (event) => {
    setTitleInput(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaptionInput(event.target.value);
  };


const postEvent=(event)=>{
    if(event.key==='Enter'){
        iPost()
    }
}


  return (
    <div className='app'>
      <div className='inputbox'>
        <input
          className='input1'
          value={titleInput}
          onChange={handleTitleChange}
          maxLength={50}
          type='text'
          placeholder='Write Title...'
          onKeyUp={postEvent}
        />
        <input
          className='input2'
          value={captionInput}
          onChange={handleCaptionChange}
          maxLength={250}
          type='text'
          placeholder='Write Something...'
          onKeyUp={postEvent}
        />
        <button className='button' onClick={iPost}>Create Post</button>
      </div>

      {posts.map((post, index) => (
        <div className='postbox' key={index}>
          <div className='titlebox'>
            <h1 className='title'>{post.title}</h1>
          </div>
          <div className='textbox'>
            <h3 className='text'>{post.caption}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
