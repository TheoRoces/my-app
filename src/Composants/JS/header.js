import { useState } from 'react';
import {Link} from "react-router-dom";
import appleStore from '../../Logos/appStore.png';
import playStore from '../../Logos/playStore.png';
import '../CSS/header.css';
import logo from '../../Logos/Logo Tapehouse/72ppi/logo-tapehouse.png';
import facebook from '../../Icônes/facebook.png';
import instagram from '../../Icônes/instagram.png';
import soundcloud from '../../Icônes/soundcloud.png';
import apple from '../../Icônes/apple.png';
import googlePlay from '../../Icônes/google_play.png';

function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

  return (
      <section className="headerApp">

        <div className='logoApp'>
            <Link to="/">
            <img src={logo}/>
            </Link>
        </div>
        
        <div className='menuAppDesktop'>
            <ul className='menuDesktop'>
                <Link to="/">
                    <li className='itemMenuDesktop'>
                        Le bar
                    </li>
                </Link>
                <Link to="/radios">
                    <li className='itemMenuDesktop'>
                        Radios
                    </li>
                </Link>
                <Link to="/podcasts">
                    <li className='itemMenuDesktop'>
                        Podcasts
                    </li>
                </Link>
                <Link to="/artistes">
                    <li className='itemMenuDesktop'>
                        Artistes
                    </li>
                </Link>
                <Link to="/evenements">
                    <li className='itemMenuDesktop'>
                        Évènements
                    </li>
                </Link>
            </ul>
        </div>

        <div className='btnMenuBurger' onClick={toggleHamburger}>
            <div className='barBtnBurger1'></div>
            <div className='barBtnBurger2'></div>
            <div className='barBtnBurger3'></div>
        </div>

        <div className='menuAppMobile'>
            <ul className='menuMobile'>
                <Link to="/" onClick={toggleHamburger}>
                    <li className='itemMenuMobile'>
                        Le bar
                    </li>
                </Link>
                <Link to="/radios" onClick={toggleHamburger}>
                    <li className='itemMenuMobile'>
                        Radios
                    </li>
                </Link>
                <Link to="/podcasts" onClick={toggleHamburger}>
                    <li className='itemMenuMobile'>
                        Podcasts
                    </li>
                </Link>
                <Link to="/artistes" onClick={toggleHamburger}>
                    <li className='itemMenuMobile'>
                        Artistes
                    </li>
                </Link>
                <Link to="/evenements" onClick={toggleHamburger}>
                    <li className='itemMenuMobile'>
                        Évènements
                    </li>
                </Link>
            </ul>

            <div className="separateDiv"></div>

            <section className="getTheApp">
                <img src={appleStore}/>
                <img src={playStore}/>
            </section>

            <div className="separateDiv"></div>

            <section className="socialsMediaMenuMobile">
                <div className="facebook singleSocial">
                    <img src={facebook} alt="Icône Facebook"/>
                </div>
                <div className="instagram singleSocial">
                    <img src={instagram} alt="Icône Instagram"/>
                </div>
                <div className="soundcloud singleSocial">
                    <img src={soundcloud} alt="Icône SoundCloud"/>
                </div>
                <div className="apple singleSocial">
                    <img src={apple} alt="Icône Apple"/>
                </div>
                <div className="googlePlay singleSocial">
                    <img src={googlePlay} alt="Icône Google Play Store"/>
                </div>
            </section>
        </div>

        <style jsx>{`
            .menuAppMobile {
                opacity: ${hamburgerOpen ? 1 : 0};
                transform: ${hamburgerOpen ? 'scale(1)' : 'scale(0)'};
            }

            .barBtnBurger1 {
                transform: ${hamburgerOpen ? 'translateY(6.5px) rotate(45deg)' : 'translateY(0) rotate(0)'};
            }

            .barBtnBurger2 {
                transform: ${hamburgerOpen ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${hamburgerOpen ? 0 : 1};
            }

            .barBtnBurger3 {
                transform: ${hamburgerOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
            }

            `}
        </style>

      </section>
    );
}

export default Header;

// document.querySelector(".btnMenuBurger").addEventListener("click", () => {
//     document.querySelector(".menuAppMobile").classList.add("menuMobileOpen");
//     }); 

//         document.querySelectorAll('li').addEventListener("click", () => {
//             document.querySelector(".menuAppMobile").classList.remove("menuMobileOpen");
//             }); 