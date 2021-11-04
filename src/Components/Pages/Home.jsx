import React from 'react';
import ReactPlayer from 'react-player';
import './home.css';
import { NavLink } from 'react-router-dom';
import videoHomeLibrary from '../../assets/videos/video_home_library.mp4';

const Home = () => {
  return (
    <div className="home">
      <div className="home-video-div">
        <h1 className="title">Welcome to Hogwarts</h1>

        <div className="home-video">
          <ReactPlayer
            url="./home_video2.mp4"
            autoPlay="true"
            playing="true"
            loop="true"
            width="1820px"
          />
        </div>
      </div>

      <section className="home-section">
        <div className="home-div-texte">
          <h3>Discover the library</h3>
          <p>
            «Ce qui compte, ce n’est pas la naissance, mais ce que l’on
            devient», disait Albus Dumbledore, le célèbre directeur de Poudlard.
            Vingt ans plus tard, la magie d’Harry Potter opère toujours. Les
            aventures du sorcier aux lunettes rondes ont émerveillé des millions
            de lecteurs et spectateurs à travers le monde. Découvrez sans plus
            tarder notre page bibliothèque dédiée aux personnages de la saga
            Harry Potter.
          </p>

          <button type="button" className="cursor">
            <NavLink to="/library">Go to library</NavLink>
          </button>
        </div>

        <div className="home-div-video">
          <ReactPlayer
            url={videoHomeLibrary}
            volume="1"
            muted="true"
            playing="true"
            loop="true"
            width="550px"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home-div-video">
          <ReactPlayer
            url="./home_video_section_quizz.mp4"
            autoPlay="true"
            playing="true"
            loop="true"
            width="550px"
          />
        </div>

        <div className="home-div-texte">
          <h3>Discover the quizz</h3>
          <p>
            Le temps passe, et les fans de Harry Potter restent. J.K Rowling a
            réussi à créer un monde si complet que les fans purs et durs de sa
            saga continuent de ne jurer que par ce dernier. Aujourd&apos;hui,
            nous leur proposons de se mettre au défi avec un nouveau quiz de
            haut niveau, que seuls les fans les plus absolus pourront réussir.
          </p>

          <button type="button">
            <NavLink activeClassName="" to="/quizz">
              Go to quizz
            </NavLink>
          </button>
        </div>
      </section>

      <section className="home-section">
        <div className="home-div-texte">
          <h3>Discover the library</h3>
          <p>
            «Ce qui compte, ce n’est pas la naissance, mais ce que l’on
            devient», disait Albus Dumbledore, le célèbre directeur de Poudlard.
            Vingt ans plus tard, la magie d’Harry Potter opère toujours. Les
            aventures du sorcier aux lunettes rondes ont émerveillé des millions
            de lecteurs et spectateurs à travers le monde. Découvrez sans plus
            tarder notre page bibliothèque dédiée aux personnages de la saga
            Harry Potter.
          </p>

          <button type="button">
            <NavLink activeClassName="" to="/battle">
              Go to battle
            </NavLink>
          </button>
        </div>

        <div className="home-div-video">
          <ReactPlayer
            url="./home_video_section_battle.mp4"
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
