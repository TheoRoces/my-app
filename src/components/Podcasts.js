import React, { Component } from 'react'
import axios from 'axios';
import PodcastItems from './PodcastItems';
export class Podcasts extends Component {
   state = {
       podcasts: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://tapehouse.upbee.fr/wp-json/wp/v2/podcasts/')
       .then(res => this.setState({
            podcasts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
    const {podcasts, isLoaded} = this.state;
    return (
        <div>
            {podcasts.map(podcast =>
            <PodcastItems key={podcast.id} podcast={podcast}/>
            )}
        </div>
    );
}
}
export default Podcasts