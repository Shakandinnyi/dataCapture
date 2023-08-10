import "./index2.css";

import {Link } from 'react-router-dom'
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";
import { useState, useRef } from "react";
import AudioPlay from './AudioPlay'


const NewPost = ({
    handleSubmit, handleUpload,handleUploadB,servicesName, number,setNumber,type,setType,setLocation, location, handleUpload2B, image,setImage, coordinates,setCoordinates, municipality,setMunicipality,
    
    setServicesName, servicesInfo, setServicesInfo, setImageB, imageB,email,setEmail,ward,setWard, urgent,setUrgent
}) => {

    let [recordOption, setRecordOption] = useState("audio");

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};
   

    return (
        <main className="NewPost">
            <h2>Report</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postName">Your Name:</label>
                <input
                    id="postName"
                    type="text"
                    placeholder="for internal use"
                    required
                    value={servicesName}
                    onChange={(e) => setServicesName(e.target.value)}
                />      
                    
			


                     

  
         
                <label htmlFor="postName">Email Address:</label>
                <input
                    id="postName"
                    type="text"
                    placeholder="for internal use"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
     
                <label htmlFor="postNam">Your Number</label>
                <input
                    id="postNam"
                    type="text"
                    placeholder="for internal use"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />





<label htmlFor="postName">Town/Village</label>
                <input
                    id="postName"
                    type="text"
                   
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

<label htmlFor="postName">Ward</label>
                <input
                    id="postName"
                    type="text"
                   
                    placeholder="your ward councilor will get a copy of this report"
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                />

                <label htmlFor="postName">Type</label>

                  
                   <select className="newPostForm" value={type} onChange={(e) => setType(e.target.value)}>
                   <option  value="Gravel">Select Incident Type</option>
                    <option  value="Gravel Roads">Gravel Roads</option>
                    <option  value="Potholes">Potholes</option>
                    <option  value="Elecricity Disruptions">Electricity Disruptions</option>
                    <option  value="Illegal Connections">Illegal Connections</option>
                    <option  value="Water Leaks">Water Leaks</option>
                    <option  value="Sewage">Sewage</option>
                    <option  value="Refuse Removal">Refuse Removal</option>
                    <option  value="Other">Other</option>
              
                   </select>

                   <label htmlFor="postName">Urgency</label>

                  
                   <select className="newPostForm" value={urgent} onChange={(e) => setUrgent(e.target.value)}>
                     <option  value="normal">Select an Urgency</option>
                    <option  value="Normal">Normal - within 30 days<p></p></option>
                    <option  value="Urgent">Urgent - within 7 days</option>
                    <option  value="Overnight">Overnight -seeks immediate resolution</option>
                    <option  value="Neglected">Neglected - over 90 days</option>
                    
                   </select>
            
                   
                   <label htmlFor="postName">Municipality</label>

                  
                    <select value={municipality} onChange={(e) => setMunicipality(e.target.value)}>
                  
                    <option  value="normal">Select a Municipality</option>
                    <option  value="Thulamela Local Municipality">Thulamela</option>
                    <option  value="Musina Local Municipality">Musina</option>
                    <option  value="Makhado Local Municipality">Makhado</option>
                    <option  value="Collins Chabane Local Municipality">Collins Chabane</option>
                    <option  value="Waterberg District">Waterberg District</option>
                    <option  value="Sekhukhune District">Sekhukhune District</option>
                    <option  value="Mopani District">Mopani District</option>
                    <option  value="Capricorn District">Capricon District</option>
                    

                    </select>
                  
              

                <label htmlFor="postName">Location</label>
                <a href="https://www.google.com/maps" target="_blank"><button className="random-btn">Current Position</button></a>
                <a href="https://www.lifewire.com/latitude-longitude-coordinates-google-maps-1683398" target="_blank">How to post coordinates</a>
               
            
                <input
                    id="postName"
                    type="text"
                   placeholder="-34.6283864,27.2516951"
                    required
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                />
             
              
              
                <label htmlFor="myImage">Upload pictures</label>
                <input
                type="file"  multiple onChange={handleUpload}
                required  
                 />
                  
                <img style={{height:'350px',width:'350px'}} src={image} alt="" />
                <input
                type="file"  multiple onChange={handleUploadB}
               
                 />
                  
                <img src={imageB} alt="" />
            

                <label htmlFor="postBody">info</label>
                <textarea
                    id="postInfo"
                    required
                    value={servicesInfo}
                    onChange={(e) => setServicesInfo(e.target.value)}
                />
   

 

                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost;