import Home from './Home';
import NewPost from './NewPost'
import About from './About';
import api from './api/services';
import { format } from 'date-fns';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'
import { useState} from 'react';
import {useEffect} from 'react';
import Faq from './Faq';


import Nav from './Nav';


function App() {
 
    const [services,setServices] =useState([])
    const [search,setSearch] =useState('');
    const [searchResults,setSearchResults] = useState([]);
  const [servicesName, setServicesName] = useState('');
  const [servicesInfo, setServicesInfo] = useState('');

  const [image, setImage] = useState('');
  const [imageB, setImageB] = useState('');
  
  const [location, setLocation] =useState('');
  const [type,setType] =useState('');
  const [number,setNumber] =useState('');
  const[email,setEmail]  =useState(' ')
  const [coordinates,setCoordinates] =useState('');
  const [municipality,setMunicipality] =useState('');
  const[status,setStatus]=useState('');
  const [ward,setWard]=useState('');

  const navigate=useNavigate();

    
   const handleSubmit = async (e) => {
    e.preventDefault();
      const id = services.length ? services[services.length - 1].id + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newService = { id, name: servicesName, datetime,email,ward, info: servicesInfo,status,image,municipality,type,coordinates, imageB, number,location};
    try {
      const response = await api.post('/services', newService);
      const allServices = [...services, response.data];
      setServices(allServices);
      setServicesName('');
      setServicesInfo('');
      setLocation('');
      setImage('');
      setImageB('');
      setMunicipality('')
      setType('');
      setEmail('');
      setNumber('');
      setCoordinates('');
      setWard('');
      navigate('/');

    } catch(err) {  console.log(`Error: ${err.message}`);}
   

  }

  useEffect(() => {
  const fetchServices = async () => {
    try {
      const response = await api.get('/services');
      setServices(response.data);
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range 
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  }

  fetchServices();
}, [])

useEffect(() => {
    const filteredResults = services.filter((service) =>
      ((service.info).toLowerCase()).includes(search.toLowerCase())
      || ((service.name).toLowerCase()).includes(search.toLowerCase() 
      || ((service.municipality).toLowerCase()).includes(search.toLowerCase() || ((service.location).toLowerCase()).includes(search.toLowerCase()
      ))));

    setSearchResults(filteredResults.reverse());
  }, [services, search])

  const handleUpload = async (e) => {
  console.log(e.target.files);
  setImage(URL.createObjectURL(e.target.files[0]));
  }
  const handleUploadB = async (e) => {
    console.log(e.target.files);
    setImageB(URL.createObjectURL(e.target.files[0]));
    }


  return (
    <div className="App">
    <Header title="DataCapture" />
    <Nav search={search} setSearch={setSearch} />
   
   <Routes>
   <Route path="/" element={<Home services={searchResults} setServices={setServices} />} />
   <Route  path="/report" element={<NewPost
            services={services}
            setServices={setServices}
            handleSubmit={handleSubmit}
            servicesName={servicesName} 
            setServicesName={setServicesName} 
            setServicesInfo={setServicesInfo} 
            servicesInfo={servicesInfo} 
           number={number}
           setNumber={setNumber}
           email={email}
           setEmail={setEmail}
           coordinates={coordinates}
           setCoordinates={setCoordinates}
            image={image} 
            imageB={imageB} 
           setImage={setImage}
           setImageB={setImageB}
           type={type}
           setType={setType}
           municipality={municipality}
           setMunicipality={setMunicipality}
           status={status}
           setStatus={setStatus}
           location={location}
           setLocation={setLocation}
           handleUpload={handleUpload}
           handleUploadB={handleUploadB}
           ward={ward}
           setWard={setWard}
            
  
            />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
   </Routes>


     

    <Footer/>

  
        
      
    </div>
  )
}

export default App;
