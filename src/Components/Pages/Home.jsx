import React from 'react';
import ReactPlayer from 'react-player';
import './home.css';
import { NavLink } from 'react-router-dom';
import videoHomeLibrary from '../../assets/videos/video_home_library.mp4';
import videoHomeBattle from '../../assets/videos/home_video_section_battle.mp4';
import videoHomeQuizz from '../../assets/videos/home_video_section_quizz.mp4';
import videoHome from '../../assets/videos/HarryShots.mp4';

const Home = () => {
  return (
    <div className="home">
      <div className="home-div-video">
        <h1 className="title-bis">Welcome to Hogwarts</h1>

        <ReactPlayer
          className="home-video"
          url={videoHome}
          volume={1}
          muted
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>

      <section className="home-section-library">
        <div className="home-div-library-texte">
          <h3>Discover the library</h3>
          <p>
            &quot;It matters not what somebody is born but what they grow to
            be&quot; once said Albus Dumbledore, the famous headteacher of
            Hogwarts. Twenty years later, Harry Potter&apos;s magic is still
            operating. The adventures of the wizard with round glasses have
            enthralled millions of readers and viewers around the world.
            Discover without further ado our library page dedicated to the
            characters of Harry Potter&apos;s series.
          </p>
          <button type="button" className="cursor">
            <NavLink to="/library" className="nav-link">
              Go to library
            </NavLink>
          </button>
        </div>

        <div className="home-div-library-video">
          <ReactPlayer
            url={videoHomeLibrary}
            volume={1}
            muted
            playing
            loop
            width="100%"
            height="80%"
          />
        </div>
      </section>

      <section className="home-section-quizz">
        <div className="home-div-quizz-video">
          <ReactPlayer
            url={videoHomeQuizz}
            volume={1}
            muted
            playing
            loop
            width="100%"
            height="80%"
          />
        </div>

        <div className="home-div-quizz-texte">
          <h3>Discover the quizz</h3>
          <p>
            Time flies and Harry Potter&apos;s fans stay loyal. J.K. Rowling
            managed to create a world so totally complete that diehard fans of
            the series continue to only swear to it. Today, we suggest they
            challenge themselves with a new top-level quizz that only the most
            complete fans will be able to accomplish.
          </p>
          <button type="button" className="cursor">
            <NavLink className="nav-link" to="/quiz">
              Go to quiz
            </NavLink>
          </button>
        </div>
      </section>

      <section className="home-section-battle">
        <div className="home-div-battle-texte">
          <h3>Discover your favorite character</h3>
          <p>
            This epic franchise may be known for its magical world and huge
            battles, but the most memorable aspect is its many characters. The
            cast is extensive and full of vibrant personalities. Some of the
            characters are loveable, while others teach fans what not to do in
            life.
          </p>
          <button type="button" className="cursor">
            <NavLink className="nav-link" to="/favorite">
              Go to favorite
            </NavLink>
          </button>
        </div>

        <div className="home-div-battle-video">
          <ReactPlayer
            url={videoHomeBattle}
            volume={1}
            muted
            playing
            loop
            width="100%"
            height="80%"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
