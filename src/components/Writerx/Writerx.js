 import React from 'react';
 import './Writerx.css'
 
 const Writerx = (props) => {
    //  console.log(props)
     const {img,name,born,education,occupation,books}=props.writer;
    //  console.log(props.writer);
     return (
         <div className="writer">
             <img   src={img} alt="" />
             <h2 className="writer-name">   Writer Name :{name}</h2>
            <p>Born:{born}</p>
            <p>Education:{education}</p>
            <p>Occupation:{occupation}</p>
            <p>Books:{books}</p>
            <button 
            onClick={() => props.handleBookAdded(props.writer)
            }
            className="btn-regular">Books Added</button>

         </div>
     );
 };
 
 export default Writerx;