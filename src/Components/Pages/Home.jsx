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
      <div className="home-video-div">
        <h1 className="title">Welcome to Hogwarts</h1>

        <ReactPlayer
          className="home-video"
          url={videoHome}
          volume="1"
          muted="true"
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>

      <section className="home-section-library">
        <div className="home-div-texte-library">
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

        <div className="home-div-video-library">
          <ReactPlayer
            url={videoHomeLibrary}
            volume="1"
            muted="true"
            playing="true"
            loop="true"
            width="650px"
          />
        </div>
      </section>

      <section className="home-section-quizz">
        <div className="home-div-video-quizz">
          <ReactPlayer
            url={videoHomeQuizz}
            volume="1"
            muted="true"
            playing="true"
            loop="true"
            width="650px"
          />
        </div>

        <div className="home-div-texte-quizz">
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

      <section className="home-section-battle">
        <div className="home-div-texte-battle">
          <h3>Discover the battle</h3>
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

        <div className="home-div-video-battle">
          <ReactPlayer
            url={videoHomeBattle}
            volume="1"
            muted="true"
            playing="true"
            loop="true"
            width="650px"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
