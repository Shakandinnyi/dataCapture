import "./index2.css";
import { useState } from "react";
import {Link,useParams} from 'react-router-dom'



const NewPost = ({
    handleDelete, services
  
}) => {

    const {id} =useParams();
    const service=services.find(service=> (service.id).toString() === id);
    return (
        <main className="NewPost">
            <h2>Report</h2>
            <form className="newPostForm">
                <label htmlFor="postName">Your Email:</label>
                <input
                    id="postName"
                    type="text"
                    placeholder="if it matches original creator email, it will be deleted"
                    />
         
             

                <button onClick={() =>handleDelete(service.id)}>Submit</button>
            </form>
        </main>
    )
}

export default NewPost;