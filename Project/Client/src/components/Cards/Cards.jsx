import React from "react";
import Card from "../Card/Card.jsx"
import style from "./Cards.module.css"

export default function Cards(props) {
   return (
   <div className={style.contenedor}>
      {props.characters.map(character=>{
         return <Card 
                  id={character.id}
                  name={character.name} 
                  status={character.status} 
                  species={character.species} 
                  gender={character.gender} 
                  origin={character.origin}
                  image={character.image}
                  onClose={props.onClose}
               />
         }  )
      }
   </div>
   );
}
