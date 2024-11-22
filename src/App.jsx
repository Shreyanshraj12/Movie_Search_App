import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



function App(){
  const[searchTerm,setsearchTerm] = useState('');
  const[data,setdata] = useState([]);

const handleInputChange = (event)=>{
  setsearchTerm(event.target.value);
}


const handleSearch = (event)=>{
  event.preventDefault();
}





 useEffect(() => {
  if(searchTerm){

    axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=cac44f9d`).then((response)=>{
      if(response.data.Search){
      setdata(response.data.Search)
      }

      else{
        setdata([]);
      }
    })
    }
  
  },[searchTerm]);

  return(
    <div className="min-h-screen bg-gray-100 p-4">
 <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Movie Search</h1>
 <form onSubmit={handleSearch}>
<input type='text' value={searchTerm} onChange={handleInputChange}placeholder='Enter Movie Name' className='px-4 py-2 w-1/2 md:w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>



 </form>
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>   
  <h2>Movie Poster</h2>
  {data.length > 0 ? (data.map((iteam,index)=>(
    <div className='bg-white rounded-lg shadow-md overflow-hidden text-center'>
    <img src={iteam.Poster} key={index} className='w-full h-72 object-cover'/>
    <p className='mt-2 text-lg font-semibold text-gray-800'>{iteam.Title}</p>
    </div>
  ))
): (
  <p className='text-center text-gray-600'>No Movie Found</p>
)}
 </div>


    </div>
  )
}



  





export  default App;