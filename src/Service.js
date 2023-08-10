import  { useState } from 'react';
import{Link} from 'react-router-dom'
import AudioRecorder from './AudioRecorder';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import "./index2.css";
import VideoRecorder from './VideoRecorder';



const Service = ({ id, info, name,datetime, status,statusInfo,statusInfo1,statusInfo2, audio,image, ward,imageB,coordinates,municipality,location,urgent, type,number }) => {
  const [readMore, setReadMore] = useState(false);
  const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   const [showInfo, setShowInfo] = useState(false);

   let [recordOption, setRecordOption] = useState("video");

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};
  
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      
      <footer>
        <div className="tour-info">
        <h2> {type}</h2>
        <p className="postDate">{datetime}</p>
       
      
			
        </div>
        <div style={{margin:"0", padding:"0"}} className="tour-info">
          <h4>Town/Village</h4>
        <h4> {location}</h4>
        </div>

        <div style={{margin:"0", padding:"0"}} className="tour-info">
          <h4>Ward</h4>
        <h4> {ward}</h4>
        </div>

        <div style={{margin:"0", padding:"0",fontWeight:"lighter"}}  className="tour-info">
          <h4>GPS</h4>
        <h4><a href="https://www.google.com/maps" target="_blank"> {coordinates}</a></h4>
        </div>
     
        <div style={{margin:"0", padding:"0"}}  className="tour-info">
          <h4>Urgency</h4>
         
        <h4> {urgent}</h4>
        </div>
     
        <div style={{margin:"0", padding:"0"}}  className="tour-info">
          <h4>Municipality</h4>
        <h4> {municipality}</h4>
        </div>
        <div style={{margin:"0", padding:"0"}}  className="tour-info">
        <h4>Status</h4> <button className='btn' style={{background:'#FF4463'}}>{status}</button>
        </div><br/>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
      
        <br/>
        <article className='question'>
      <header>
        <h4>Status/Updates</h4>
        <button className='btn-Questions' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{statusInfo}<br/>{statusInfo1}<br/>{statusInfo2}</p>}
    </article>
  
    <div style={{height:'70px'}} >
				
       
				{recordOption === "audio" ? <AudioRecorder /> : <AudioRecorder />}
			</div>
		<br/> <br/>
    
  

        <div className="like-button-container">
      <button
         className={`like-button ${liked ? 'liked' : ''}`}
         style={{fontFamily:'Work sans'}}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(true);
         }}
      >
         {likes} Citizens Affected
      </button>
      </div>
      
      
      
   
				
    
      </footer>
    </article>
  );
};

export default Service;