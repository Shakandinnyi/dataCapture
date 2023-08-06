import  { useState } from 'react';
import{Link} from 'react-router-dom'
import AudioRecorder from './AudioRecorder';

import { FaCheckCircle } from 'react-icons/fa';
import "./index2.css";
import VideoRecorder from './VideoRecorder';



const Service = ({ id, info, name, status, audio,image,imageB,coordinates,municipality,location, type,number,removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);

   let [recordOption, setRecordOption] = useState("video");

   const toggleRecordOption = (type) => {
     return () => {
       setRecordOption(type);
     };
   };
   
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <img src={imageB} alt={name} />
      <footer>
        <div className="tour-info">
        <h2>{name}</h2>
       
      
			
        </div>
        <div style={{margin:"0", padding:"0"}} className="tour-info">
          <h4>Town/Village</h4>
        <h4> {location}</h4>
        </div>

        <div style={{margin:"0", padding:"0",fontWeight:"lighter"}}  className="tour-info">
          <h4>Current Position</h4>
        <h4> {coordinates}</h4>
        </div>
     
        <div style={{margin:"0", padding:"0"}}  className="tour-info">
          <h4>Type</h4>
        <h4> {type}</h4>
        </div>
     
        <div style={{margin:"0", padding:"0"}}  className="tour-info">
          <h4>Municipality</h4>
        <h4> {municipality}</h4>
        </div>
        <p><FaCheckCircle role="button" tabIndex="0" className="icon2"/> </p> <button className='btn' style={{background:'#FF4463'}}>{status}</button>
       
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
      
        <br/>
        
        <div style={{margin:"0",height:'70px'}}>
          {recordOption === "audio" ? <AudioRecorder style={{margin:'0'}} />: <AudioRecorder/>}
        </div>
      
  <br/>
        
        <div className="like-button-container">
      <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(true);
         }}
      >
         {likes} Affected
      </button>
      </div>
      
      
      
   
				
    
      </footer>
    </article>
  );
};

export default Service;