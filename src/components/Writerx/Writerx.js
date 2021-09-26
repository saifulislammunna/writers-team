 import React from 'react';
 import './Writerx.css'
 
 const Writerx = (props) => {
     const {img,name,born,education,occupation,books}=props.writer;
     console.log(props.writer);
     return (
         <div className="writer">
             <img   src={img} alt="" />
             <h2 className="writer-name">   Writer Name :{name}</h2>
            <p>Born:{born}</p>
            <p>Education:{education}</p>
            <p>Occupation:{occupation}</p>
            <p>Books:{books}</p>
            <button className="btn-regular">Books Added</button>

         </div>
     );
 };
 
 export default Writerx;