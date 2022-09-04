import {Link} from "react-router-dom";
import '../CSS/footer.css';
import logo from '../../Logos/Logo Tapehouse/72ppi/logo-the-tapehouse.png';
import facebook from '../../Icônes/facebook.png';
import instagram from '../../Icônes/instagram.png';
import soundcloud from '../../Icônes/soundcloud.png';
import apple from '../../Icônes/apple.png';
import googlePlay from '../../Icônes/google_play.png';

function Footer() {
  return (

    <footer className='container'>
      <section className="footerApp">
        <section className="containerFooter">
          <div className='footerLogo'>
            <Link to="/">
                <img src={logo}/>
            </Link>
            <p>TAPEHOUSE est un bar d'ambiance et une webradio situés à Niort diffusant de la musique House, Deep House, Techno, Minimal...
                Venez écouter du bon son tout en dégustant un merveilleux cocktail ! <br /> <br />
                <b>Nos horaires : </b><br/> 18h - 02h du Mardi au Dimanche 
            </p>
          </div>

          <div className='footerNavigation'>
            <h3>
              Naviguer
            </h3>
            <ul className='menuNavigationFooter'>
                  <Link to="/">
                      <li className='itemMenuFooter'>
                          Le bar
                      </li>
                  </Link>
                  <Link to="/radios">
                      <li className='itemMenuFooter'>
                          Radios
                      </li>
                  </Link>
                  <Link to="/podcasts">
                      <li className='itemMenuFooter'>
                          Podcasts
                      </li>
                  </Link>
                  <Link to="/artistes">
                      <li className='itemMenuFooter'>
                          Artistes
                      </li>
                  </Link>
                  <Link to="/evenements">
                      <li className='itemMenuFooter'>
                          Évènements
                      </li>
                  </Link>
              </ul>
          </div>

          <div className='footerLegals'>
            <h3>
              Légal
            </h3>
            <ul className='menuNavigationFooter'>
                  <Link to="/mentions_legales">
                      <li className='itemMenuFooter'>
                          Mentions légales
                      </li>
                  </Link>
                  <Link to="/politique_confidentialite">
                      <li className='itemMenuFooter'>
                          Politique de confidentialité
                      </li>
                  </Link>
                  <Link to="/conditions_ventes">
                      <li className='itemMenuFooter'>
                          CGV
                      </li>
                  </Link>
                  <Link to="/cookies">
                      <li className='itemMenuFooter'>
                          Cookies
                      </li>
                  </Link>
              </ul>
          </div>

          <div className='adressFooter'>
            <h3>
              Adresse du bar
            </h3>
            <p>
              72, avenue de Limoges,
              79 000, Niort <br/>
            </p>
            <a href="tel:+330607327263">06 07 32 72 63</a>
          </div>

        </section>
      
      
        <section className="socialsMedia">
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
      </section>
    </footer>
    );
}

export default Footer;