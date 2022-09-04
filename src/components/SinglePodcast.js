import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export class PodcastItems extends Component {
   state = {
        podc: [],
       isLoaded: false
   }
   static propTypes = {
        podcast: PropTypes.object.isRequired
   }
 
   render() {
       const { title, excerpt, acf, content } = this.props.podcast;
       const {podc} = this.state;
       return (
           <div>
              <h2>{title.rendered}</h2>
              <div dangerouslySetInnerHTML={{__html: acf.publisher}}/>
              <div dangerouslySetInnerHTML={{__html: acf.date_de_levenment}}/>
              <div dangerouslySetInnerHTML={{__html: acf.heure_de_levenement}}/>
              <div dangerouslySetInnerHTML={{__html: acf.lieu_de_levenement}}/>
              <div dangerouslySetInnerHTML={{__html: acf.publisher}}/>
              <img src={acf.image_du_podcast.sizes.thumbnail} alt={title.rendered}/>
              <div dangerouslySetInnerHTML={{__html: content.rendered}}/>
              <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>  
           </div>
       )
   }
}
export default PodcastItems