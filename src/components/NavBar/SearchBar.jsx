import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
   const [id,setId] = useState("");

   // const handleClick = () => {};
   
   const handdleChange =(event) => {
      setId(event.target.value);
   };

   return (
      <div>
         <input type='search' onChange={handdleChange} />
         <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
      </div>
   );
}
