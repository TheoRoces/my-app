import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../Pages/CSS/evenement.css';
export class EventItems extends Component {
   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }
   static propTypes = {
       event: PropTypes.object.isRequired
   }
 
   render() {
       const { title, excerpt, acf, content } = this.props.event;
       const {author, imgUrl} = this.state;
       return (
           <div className="eventItem">
              <img src={acf.image_de_levenement.sizes.thumbnail}/>
              <div className="contentItem">
                <div className="infosEvent">
                    <span className="dateHourEvent">
                        <div dangerouslySetInnerHTML={{__html: acf.date_de_levenment}}/>
                        &nbsp;à&nbsp;
                        <div dangerouslySetInnerHTML={{__html: acf.heure_de_levenement}}/>
                    </span>
                    <span className="localisationEvent">
                        <div dangerouslySetInnerHTML={{__html: acf.lieu_de_levenement}}/>
                    </span>
                </div>
                <h3>{title.rendered}</h3>
                <div className="excerptEvent">
                    <div dangerouslySetInnerHTML={{__html: acf.description}}/>
                </div>
                <div className='tagsEvents'>
                    <div dangerouslySetInnerHTML={{__html: acf.tag1}}/>
                    <div dangerouslySetInnerHTML={{__html: acf.tag2}}/>
                    <div dangerouslySetInnerHTML={{__html: acf.tag3}}/>
                </div>
              </div>
           </div>
       )
   }
}
export default EventItems