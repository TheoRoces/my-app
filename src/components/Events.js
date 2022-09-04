import React, { Component } from 'react'
import axios from 'axios';
import EventItems from './EventItems';
export class Events extends Component {
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
        <div>
            {events.map(event =>
            <EventItems key={event.id} event={event}/>
            )}
        </div>
    );
}
}
export default Events