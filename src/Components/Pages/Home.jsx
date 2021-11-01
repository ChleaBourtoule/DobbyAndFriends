import React from 'react';
import ReactPlayer from 'react-player';
import './home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="title">Welcome to Hogwarts</h1>
      </div>
      <section className="home-section">
        <div className="home-div-texte">
          <h3>Discover the library</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            possimus nulla exercitationem sapiente. Reiciendis quas error
            officiis nihil placeat quibusdam ut fugiat, ipsa dicta nesciunt
            veniam amet dolore ipsum aspernatur!
          </p>

          <button type="button">
            <NavLink activeClassName="" to="/library">
              Go to library
            </NavLink>
          </button>
        </div>

        <div className="home-div-video">
          <ReactPlayer
            url="./video_home_library.mp4"
            autoPlay="true"
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
