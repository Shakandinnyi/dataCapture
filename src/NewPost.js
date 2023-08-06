import "./index2.css";
import { useState } from "react";
import {Link } from 'react-router-dom'



const NewPost = ({
    handleSubmit, handleUpload,handleUploadB,servicesName, number,setNumber,type,setType,setLocation, location, handleUpload2B, image,setImage, coordinates,setCoordinates, municipality,setMunicipality,
    
    setServicesName, servicesInfo, setServicesInfo, setImageB, imageB,email,setEmail,ward,setWard
}) => {

 
    return (
        <main className="NewPost">
            <h2>Report</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postName">Your Name:</label>
                <input
                    id="postName"
                    type="text"
                  
                    required
                    value={servicesName}
                    onChange={(e) => setServicesName(e.target.value)}
                />

         
                <label htmlFor="postName">Email Address:</label>
                <input
                    id="postName"
                    type="text"
                    placeholder="for internal use only"
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
                   
                    <option  value="Gravel Roads">Gravel Roads</option>
                    <option  value="Potholes">Potholes</option>
                    <option  value="Elecricity Disruptions">Electricity Disruptions</option>
                    <option  value="Illegal Connections">Illegal Connections</option>
                    <option  value="Water Leaks">Water Leaks</option>
                    <option  value="Sewage">Sewage</option>
                    <option  value="Refuse Removal">Refuse Removal</option>
                    <option  value="Other">Other</option>
              
                   </select>
            
                   
                   <label htmlFor="postName">Municipality</label>

                  
                    <select value={municipality} onChange={(e) => setMunicipality(e.target.value)}>

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
                <a href="https://www.google.com/maps" target="_blank">Current Position</a>
                <a href="https://www.lifewire.com/latitude-longitude-coordinates-google-maps-1683398" target="_blank">How to post coordinates</a>
                <p><i>Tip*- Open map, get your current location and copy the https:"" and paste it below </i></p>
            
                <input
                    id="postName"
                    type="text"
                   placeholder="https://www.google.com/maps/@-34.6283864,27.2516951,5z?entry=ttu"
                    required
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                />
             
              
              
                <label htmlFor="myImage">Upload pictures</label>
                <input
                type="file"  multiple onChange={handleUpload}
                required  
                 />
                  
                <img src={image} alt="" />
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