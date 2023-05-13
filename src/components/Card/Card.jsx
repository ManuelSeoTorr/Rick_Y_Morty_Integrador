import React from "react";
import style from "./Card.module.css"
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <>
         <p className={style.card}>
            <span><Link to={`/detail/${props.id}`} >{props.name}</Link></span>
            <button className={style.buttonClose} onClick={()=>props.onClose(props.id)}>X</button>
            <img className={style.image} src={props.image} alt='' />
         </p>
      </>
   );
}
//Card con toda la info
{/* <div className={style.card} key={props.id}>
<div className={style.header}>
   <h2 className={style.name}><Link to={`/detail/${props.id}`} >{props.name}</Link></h2>
   <h2 className={style.status}>{props.status}</h2>
</div>
<div className={style.img}>
   <img className={style.image} src={props.image} alt='' />
   <h2 className={style.origin}>{props.origin.name}</h2>
</div>
<div className={style.info}>
   <h2 className={style.species}>Especie:{props.species}</h2>
   <h2 className={style.gender}>Genero:{props.gender}</h2>
</div>
<button className={style.button} onClick={()=>props.onClose(props.id)}>X</button>
</div> */}
