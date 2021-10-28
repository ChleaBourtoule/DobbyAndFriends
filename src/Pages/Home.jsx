import React from 'react';
import ReactPlayer from 'react-player';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <div>
        <h1>Welcome to Hogwarts</h1>
      </div>
      <section className="Home-section">
        <div className="Home-div-texte">
          <h3>Découvrir la bibliothèque</h3>
          <p>je suis un paragraphe</p>
        </div>

        <div className="Home-div-video">
          <ReactPlayer
            url="./video_home_library.mp4"
            playing="true"
            loop="true"
            width="550px"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
