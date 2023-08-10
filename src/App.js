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
import data from './data';
import TabsData from './TabsData';

import useWindowSize from './hooks/useWindowSize';
import Nav from './Nav';
import Video from './Video';
import WhiteLabel from './WhiteLabel';
import Tabs from './Tabs';



function App() {
 
    const [services,setServices] =useState(data)
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
  const[statusInfo,setStatusInfo]=useState('');
  const[statusInfo1,setStatusInfo1]=useState('');
  const[statusInfo2,setStatusInfo2]=useState('');
  const [ward,setWard]=useState('');
  const[urgent,setUrgent] =useState('');

 const [audio,setAudio] =useState('');
  const navigate=useNavigate();
  const { width } = useWindowSize();

 
   

   const handleSubmit = async (e) => {
    e.preventDefault();
      const id = services.length ? services[services.length - 1].id + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newService = { id, name: servicesName, datetime,email,ward, urgent,info: servicesInfo,status,statusInfo,statusInfo1,statusInfo2,image,municipality,type,coordinates, imageB,audio, number,location};
    try {
      const response = await api.post('/services', newService);
      const allServices = [...services, response.data];
      setServices(allServices);
      setServicesName('');
      setServicesInfo('');
      setLocation('');
      setImage('');
      setImageB('');
      setAudio('');
      setMunicipality('')
      setType('');
      setEmail('');
      setNumber('');
      setCoordinates('');
      setWard('');
      setUrgent('');
      navigate('/');
      setStatusInfo('');
      setStatusInfo1('');
      setStatusInfo2('');

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
    <Header title="DataCapture"  width={width}/>
    <Nav search={search} setSearch={setSearch} />
    
   
   <Routes>
   <Route path="/" element={<Home services={services} setServices={setServices} />} />
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
           statusInfo={statusInfo}
           statusInfo1={statusInfo1}
           statusInfo2={statusInfo2}
           setStatus={setStatus}
           location={location}
           setLocation={setLocation}
           handleUpload={handleUpload}
           handleUploadB={handleUploadB}
           ward={ward}
           setWard={setWard}
           urgent={urgent}
           setUrgent={setUrgent}
            audio={audio}
            setAudio={setAudio}
  
            />} />
            
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/whitelabel' element={<WhiteLabel />} />
        <Route path='/tabs' element={<Tabs />} />
        
        
        

   </Routes>


     

    <Footer/>

  
        
      
    </div>
  )
}

export default App;
