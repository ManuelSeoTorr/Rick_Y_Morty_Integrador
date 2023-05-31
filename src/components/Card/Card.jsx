import React, { useState } from "react";
import style from "./Card.module.css"
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react";

export function Card(props) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (event) => {
      event.preventDefault();
      if (isFav){
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <>
         <p className={style.card}>
            <span><Link to={`/detail/${props.id}`} >{props.name}</Link></span>
            <button className={style.buttonClose} onClick={()=>props.onClose(props.id)}>X</button>
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
             ) : (
               <button onClick={handleFavorite}>🤍</button>
               )
            }
            <img className={style.image} src={props.image} alt='' />
         </p>
      </>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFav:(char) => dispatch(addFav(char)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps(state){
   return{myFavorites:state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
//Card con toda la info
/* <div className={style.card} key={props.id}>
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
</div> */
