import Updatecard from './updatecard';
import API_BASE from '../api';
import {useState, useEffect} from 'react';

const Updatelist=()=>{
  const[updates, setUpdates]=useState([]);
  const fetchUpdates= async()=>{
    try{
      const res=await fetch(`${API_BASE}/updates`);
      const data = await res.json();
      setUpdates(data);
    }catch(err) {
      console.error('failed to fetch updates:', err);
    }
  };
  useEffect(()=>{
    fetchUpdates();
  },[]);

  return(
        <div className='update-list'>
          {updates.map((update)=>(
            <Updatecard key={update.id} update={update}/>
          ))}
        </div>
    );
}

export default Updatelist;