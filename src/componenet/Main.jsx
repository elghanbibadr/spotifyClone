import React from 'react'
import axios from "axios";


const Main = () => {
    const [albums,setAlbums]=useState([]);
    const [seachQuery,setSeachQuery]=useState("soul"); 
  
    const options = {
      methode:"Get",
      url: 'https://api.dictionaryapi.dev/api/v2/entries/en/house',
     
    };
  
  const handleSelectChange=(event)=>{
    setSeachQuery(event.target.value);
    console.log(event.target.value);
  }
  
  
  useEffect(()=>{
    
      axios.request(options).then(function (response) {
       console.log(response.data)
       setAlbums(response.data.albums.items)
      }).catch(function (error) {
        console.error(error);
      });
  },[seachQuery])
  return (
    <section>main</section>
  )
}

export default Main