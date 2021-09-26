import React from 'react';
import './Book.css';
const Book = (props) => {
    const {bookAdded} = props;
    let total = 0;
    let names =  '';
    for(const book of bookAdded){
      total = total + book.books;
      names = names + book.name;
    }
    return (
        <div>
             <h3>Writers Added:{props.bookAdded.length} </h3>
         <h5>Total Books: {total}</h5>
          <hr />
          <div className="text-center">
            <ul className= " ">
            <li className="added-writer-name">{names}</li>
            </ul>
          </div> 
        </div>
    );
};

export default Book;