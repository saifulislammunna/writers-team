import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {  faBook} from '@fortawesome/free-solid-svg-icons'

 import './Writerx.css'
 
 const Writerx = (props) => {
    //  console.log(props)
     const {img,name,born,education,occupation,books}=props.writer;
   
    //  console.log(props.writer);
     return (
         <div className="writer rounded-3">
             <img  className="rounded-3"  src={img} width="300" height="240" alt="" />
             <h2 className="writer-name fs-3 pt-2"> Name :{name}</h2>
            <p>Born:{born}</p>
            <p>Education:{education}</p>
            <p>Occupation:{occupation}</p>
            <p>Books:{books}</p>
            <button 
            onClick={() => props.handleBookAdded(props.writer)
            }
            className="btn-regular"><FontAwesomeIcon icon={faBook} /> Books Added</button>

         </div>
     );
 };
 
 export default Writerx;