import React, { Component } from 'react'
import axios from 'axios';
import '../CSS/evenements.css';
import EventItems from '../../components/EventItems';
import Footer from '../../Composants/JS/footer';
export class Evenements extends Component {
   state = {
       events: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://tapehouse.upbee.fr//wp-json/wp/v2/events/')
       .then(res => this.setState({
           events: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
    const {events, isLoaded} = this.state;
    return (
      <section className='container'>
        <section className='restrict' id='top'>
          <h1 className='titlePage'>
            Évènements
          </h1>
          <div className="gridItems">
              {events.map(event =>
              <EventItems key={event.id} event={event}/>
              )}
          </div>
        </section>
        <Footer />
      </section>
    );
}
}
export default Evenements