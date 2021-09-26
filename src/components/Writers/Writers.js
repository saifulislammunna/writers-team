import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Writerx from '../Writerx/Writerx';
import './Writers.css';
 
/* writers component  */
const Writers = () => {
 const [writers, setWriters] = useState([]);
 const [bookAdded , setBookAdded] = useState([]);
 useEffect(()=>{
   fetch('./writers.JSON')
   .then(res => res.json())
   .then(data => setWriters(data));
 },[])
 const handleBookAdded = (writer) => {
    const newBookAdded = [...bookAdded, writer];
    setBookAdded(newBookAdded);
 }
  return (
    <div className="writers">
       <div className="writers-container">
       {
        writers.map(writer =>  <Writerx 
          writer={writer}
          key={writer.key}
          handleBookAdded ={handleBookAdded}
           >


          </Writerx>)
      }
       
       </div>
       <div className="books-added">
        <Book bookAdded={bookAdded}></Book>
          

       </div>
   
    </div>
  );
};



export default Writers;