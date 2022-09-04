import logo from './logo.svg';
import './App.css';
import './Composants/CSS/player.css';
import ScrollToTop from "./ScrollToTop";
import Header from './Composants/JS/header';
import Player from './Composants/JS/player';
import Bar from './Pages/JS/bar';
import Radios from './Pages/JS/radios';
import Podcasts from './Pages/JS/podcasts';
import Artistes from './Pages/JS/artistes';
import Evenements from './Pages/JS/evenements';
import MentionsLegales from './Pages/JS/mentions_legales';
import PolitiqueConfidentialite from './Pages/JS/politique_confidentialite';
import ConditionsVentes from './Pages/JS/conditions_ventes';
import Cookies from './Pages/JS/cookies';
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { ApplicationContextProvider } from "./context/application-context";

function App() {

  library.add([
    faPlay,
    faPause,
  ]);

  return (
    <div className="App">
    <ApplicationContextProvider>
      <Router>
        <ScrollToTop/>
        <Header />
          <Routes>
            <Route exact path="/" element={<Bar />}>
            </Route>
            <Route path="/radios" element={<Radios />}>
            </Route>
            <Route path="podcasts" element={<Podcasts />}>
            </Route>
            <Route path="/artistes" element={<Artistes />}>
            </Route>
            <Route path="/evenements" element={<Evenements />}>
            </Route>
            <Route path="/mentions_legales" element={<MentionsLegales />}>
            </Route>
            <Route path="/politique_confidentialite" element={<PolitiqueConfidentialite />}>
            </Route>
            <Route path="/conditions_ventes" element={<ConditionsVentes />}>
            </Route>
            <Route path="/cookies" element={<Cookies />}>
            </Route>
          </Routes>
        </Router>
      <Player />
        </ApplicationContextProvider>
    </div>
  );
}

export default App;