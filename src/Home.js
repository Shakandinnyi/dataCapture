import Service from './Service';
import {Link} from 'react-router-dom'
import {FaCamera} from 'react-icons/fa'

const Home = ({ services }) => {
  return (
    <main className="Home">
     <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Report service delivery <br />
            issues to your municipality
          </h1>
          
                    <p>
            Thousands of citizens in rural municipalities use DataCapture platform to report service delivery issues to their municipality.They simply take a picture, tag their location and send it instantly to the municipal offices and track its progress.
          </p>
          <button className="random-btn "style={{background:'#FF4463'}} > <Link to="/report">Start New Report</Link></button>
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