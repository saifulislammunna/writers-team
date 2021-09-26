import React, { useEffect, useState } from 'react';
import Writerx from '../Writerx/Writerx';
import './Writers.css';
 

const Writers = () => {
 const [writers, setWriters] = useState([]);
 useEffect(()=>{
   fetch('./writers.JSON')
   .then(res => res.json())
   .then(data => setWriters(data));
 },[])
  return (
    <div className="writers-container">
       
      {
        writers.map(writer =>  <Writerx 
          writer={writer}
          key={writer.name}
           >

          </Writerx>)
      }
    </div>
  );
};



export default Writers;