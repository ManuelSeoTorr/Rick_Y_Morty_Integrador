import React from "react";
import { useState } from "react";
import style from "../NavBar/Nav.module.css"

export default function SearchBar(props) {
   const [id,setId] = useState("");

   // const handleClick = () => {};
   
   const handdleChange =(event) => {
      setId(event.target.value);
   };

   return (
      <div>
         <input type='search' onChange={handdleChange} />
         <button className={style.buttonAdd} onClick={()=>{props.onSearch(id)}}>Agregar</button>
      </div>
   );
}
