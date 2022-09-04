import React, { useCallback, useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../context/application-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLasts } from '../../hooks/useLasts';
import '../CSS/radios.css';
import Footer from '../../Composants/JS/footer';
import pochette from '../../Images/pochette.jpg';
import playBtn from '../../Icônes/play_btn.png';
import pauseBtn from '../../Icônes/pause_btn.png';
import clock from '../../Icônes/clock.png';
import tourMaubourg from '../../Images/Artistes_fréquents/tour_maubourg.jpeg';

function Radios() 
{

  const {
    isPlayingPlayer1,
    isPlayingPlayer2,
    handlePause,
    handlePlayStream1,
    handlePlayStream2,
    player1Ref,
    player2Ref,
  } = useContext(ApplicationContext);

  const { lastMusics1, lastMusics2, getLastMusics } = useLasts();

  useEffect(() => {
    getLastMusics(20, 1);
    getLastMusics(20, 2);
    const interval = setInterval(() => {
      getLastMusics(20, 1);
      getLastMusics(20, 2);
    }, 50000);

    return () => {
      clearInterval(interval);
    };
  }, [getLastMusics]);

  const [changeLastsOpen, setChangeLastsOpen] = useState(false);

    const toggleChangeLasts = () =>{
        setChangeLastsOpen(!changeLastsOpen)
    }

  return (

    <section className='container'>
      <section className='restrict' id='top'>

        <h1 className='titlePage'>
          Nos radios
        </h1>
        
        <section className='radios'>

          <div className='liveOne liveRadio'>

            <div className='imgLive'>
              <span className='nameOfLive'>
                  Live 1
              </span>
              <img src={lastMusics1[0]?.img_large_url} alt="Pochette musique"/>
            </div>

            <div className='controlsLive'>
            <div className="controls">
                  <FontAwesomeIcon
                    icon={["fas", "play"]}
                    onClick={() => handlePlayStream1()}
                    style={{ display: isPlayingPlayer1 ? "none" : "block" }}
                  />
                  <FontAwesomeIcon
                    icon={["fas", "pause"]}
                    onClick={() => handlePause(player1Ref)}
                    style={{ display: isPlayingPlayer1 ? "block" : "none" }}
                  />
          </div>

              <div className='metasMusicLive'>

                <span className='nameMusicLive'>
                  {lastMusics1[0]?.title}
                </span>

                <span className='artistMusicLive'>
                  {lastMusics1[0]?.author}
                </span>

              </div>
            </div>

            <div className='taxonomiesLive'>
              <span className='typeOfMusic'>
                House
              </span>
              <span className='typeOfMusic'>
                Deep House
              </span>
              <span className='typeOfMusic'>
                Groove House
              </span>
            </div>

          </div>

          <div className='liveTwo liveRadio'>

            <div className='imgLive'>
              <span className='nameOfLive'>
                Live 2
              </span>
              <img src={lastMusics2[0]?.img_large_url} alt="Pochette musique"/>
            </div>

            <div className='controlsLive'>
            <div className="controls">
                  <FontAwesomeIcon
                    icon={["fas", "play"]}
                    onClick={() => handlePlayStream2()}
                    style={{ display: isPlayingPlayer2 ? "none" : "block" }}
                  />
                  <FontAwesomeIcon
                    icon={["fas", "pause"]}
                    onClick={() => handlePause(player2Ref)}
                    style={{ display: isPlayingPlayer2 ? "block" : "none" }}
                  />
                </div>

              <div className='metasMusicLive'>

              <span className='nameMusicLive'>
                  {lastMusics2[0]?.title}
                </span>

                <span className='artistMusicLive'>
                  {lastMusics2[0]?.author}
                </span>

              </div>
            </div>

            <div className='taxonomiesLive'>
              <span className='typeOfMusic'>
                House
              </span>
              <span className='typeOfMusic'>
                Deep House
              </span>
              <span className='typeOfMusic'>
                Groove House
              </span>
            </div>

          </div>

        </section>

        <h2 className='titlePage'>
          Dernières musiques
        </h2>

        <section className='recentMusicsSection'>
          <section className='stickyRecentMusicSection'>

            <div className='selectorLiveRecentMusics'>
              <div className='selectorLiveOne selectorLive selectorLiveOne' onClick={toggleChangeLasts}>
                <span>1</span>
              </div>

              <div className='selectorLiveOne selectorLive selectorLiveTwo' onClick={toggleChangeLasts}>
                <span>2</span>
              </div>

            </div>

            <section className='headTabRecentMusics'>
              <div className='tabLeftRecentMusics'>
                <span className='tabNbRecentMusics'>
                  #
                </span>
                <span className='tabImgRecentMusics'>
                  Images
                </span>
                <span className='tabTitlesRecentMusics'>
                  Titres
                </span>
              </div>

              {/* <img src={clock} /> */}
              
            </section>
          </section>

          <section className='zoneRecentMusicsLiveOne zoneRecentMusics'>
          <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  1
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[1]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                  <span className='nameMusicRecentMusic'>
                  {lastMusics1[1]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[1]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  2
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[2]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                  <span className='nameMusicRecentMusic'>
                    {lastMusics1[2]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[2]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  3
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[3]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                  <span className='nameMusicRecentMusic'>
                    {lastMusics1[3]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[3]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  4
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[4]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[4]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[4]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  5
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[5]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[5]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[5]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  6
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[6]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[6]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[6]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  7
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[7]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[7]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[7]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  8
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[8]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[8]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[8]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  9
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[9]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[9]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[9]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  10
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics1[10]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics1[10]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics1[10]?.author}
                  </span>
                </div>
              </div>
              {/* <span className='hourRecentMusic'>
                10:45
              </span> */}
            </div>
          </section>

          <section className='zoneRecentMusicsLiveTwo zoneRecentMusics'>
          <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  1
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[1]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                  <span className='nameMusicRecentMusic'>
                  {lastMusics2[1]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[1]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  2
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[2]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                  <span className='nameMusicRecentMusic'>
                    {lastMusics2[2]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[2]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  3
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[3]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                  <span className='nameMusicRecentMusic'>
                    {lastMusics2[3]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[3]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  4
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[4]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[4]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[4]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  5
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[5]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[5]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[5]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  6
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[6]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[6]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[6]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  7
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[7]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[7]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[7]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  8
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[8]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[8]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[8]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  9
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[9]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[9]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[9]?.author}
                  </span>
                </div>
              </div>
            </div>
            <div className='recentMusic'>
              <div className='infosRecentMusic'>
                <span className='nbRecentMusic'>
                  10
                </span>
                <div className='blockImgRecentMusic'>
                  <img src={lastMusics2[10]?.img_large_url}/>
                </div>
                <div className='metasRecentMusic'>
                <span className='nameMusicRecentMusic'>
                    {lastMusics2[10]?.title}
                    </span>
                    <span className='nameArtistRecentMusic'>
                    {lastMusics2[10]?.author}
                  </span>
                </div>
              </div>
            </div>
          </section>

        </section>

        <h2 className='titlePage'>
          Artistes fréquents
        </h2>

        <section className='recurentArtists'>
          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>
          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>
          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>
          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>
          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>

          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>
          <div className='recurentArtist'>
            <div className='imgRecurentArtist'>
              <img src={tourMaubourg}/>
            </div>
            <span className="nameRecurentArtist">
              Tour Maubourg
            </span>
          </div>
        </section>

      </section>

      <style jsx>{`
        .zoneRecentMusicsLiveOne {
          display: ${changeLastsOpen ? 'none' : 'inline'};
          opacity: ${changeLastsOpen ? 0 : 1};
        }

        .zoneRecentMusicsLiveTwo {
          display: ${changeLastsOpen ? 'inline' : 'none'};
          opacity: ${changeLastsOpen ? 1 : 0};
        }

        .recentMusicsSection .selectorLiveRecentMusics .selectorLiveOne {
          background: ${changeLastsOpen ? '#1E1E1E' : 'white'};
          color: ${changeLastsOpen ? 'black' : 'white'};
          pointer-events: ${changeLastsOpen ? 'initial' : 'none'};
        }

        .recentMusicsSection .selectorLiveRecentMusics .selectorLiveOne span {
          color: ${changeLastsOpen ? 'white' : 'black'};
        }

        .recentMusicsSection .selectorLiveRecentMusics .selectorLiveTwo {
          background: ${changeLastsOpen ? 'white' : '#1E1E1E'};
          color: ${changeLastsOpen ? 'white' : 'black'};
          pointer-events: ${changeLastsOpen ? 'none' : 'initial'};
        }

        .recentMusicsSection .selectorLiveRecentMusics .selectorLiveTwo span {
          color: ${changeLastsOpen ? 'black' : 'white'};
        }

      `}</style>
      <Footer />
    </section>
    );
}

export default Radios;