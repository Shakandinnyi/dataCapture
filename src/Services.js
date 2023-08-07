import Service from './Service';
import {Link } from 'react-router-dom'
const Services = ({ services }) => {
  return (
    <main className="Home">
            
        <h2>Stand Watch</h2>
        <p style={{ marginTop: "1rem" }}>List your services or business related to built-environment. Services could range from building, roofing, Bow and River sand delivery but must be related to everything a new home builder needs after buying a stand to build on.</p>
        <button className="PostPage button " ><Link to={`/advertise`}><h2>Post Your Services</h2></Link>    </button>

      {services.map((service) => {
        return <Service key={service.id} {...service} />;
      })}
    </main>

);

};

export default Services;