import Service from './Service';
import {Link} from 'react-router-dom'
import {FaCamera} from 'react-icons/fa'

const Home = ({ services }) => {
  return (
    <main className=" PostPage">
     <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Report service delivery <br />
            issues to your municipality
          </h1>
          
                    <p>
            Thousands of citizens in rural municipalities use DataCapture to report service delivery issues to their municipality.No registration required! They simply take a picture, tag their location and send it instantly to the municipal offices and are able totrack its progress.
          </p>
          <button className="random-btn "style={{background:'#FF4463'}} > <Link style={{textDecoration:'none'}} to="/report">Start New Report</Link></button>
        </article>
       
      </div>

      <div className="title">
      <h2 style={{marginTop:'2rem'}}>Reported issues </h2>
      <div className="underline"></div>
    </div>
      {services.map((service) => {
        return <Service key={service.id} {...service} />;
      })}
  
  </main>
);

};

export default Home;