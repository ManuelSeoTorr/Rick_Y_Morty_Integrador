import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards } from "../../redux/actions/actions";
import style from "../Cards/Cards.module.css"
import { useState } from "react";


export default function Favorites(props) {
    const dispatch = useDispatch()
    const {myFavorites} = useSelector((state)=>state) //al hacer el destructuring no se necesita del aux
    //const [aux, setAux] = useState(false); para que tome los cambios react
    const [orderValue, setOrderValue] = useState("");
    const [genderValue, setgenderValue] = useState("");

    const onClose = (id) => {
        dispatch(removeFav(id))
    }

    const handleFilter = (event) => {
      const gender = event.target.value;
      setOrderValue("");
      setgenderValue(event.target.value);
      dispatch(filterCards(gender));
    }

    const handleOrder = (event) => {
      const order = event.target.value;
      setgenderValue("");
      setOrderValue(event.target.value)
      dispatch(orderCards(order));
      // setAux(!aux); para que tome los cambios react
    }

    return (
    
    <div className={style.contenedor}>
      <div>
         <label htmlFor="">Filter by:</label>
         <select value= {genderValue} name="" id="" onChange={handleFilter}>
            <option value="">Filter by:</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
         </select>
      </div>
      <div>
         <label htmlFor="">Sort:</label>
         <select value= {orderValue} name="" id="" onChange={handleOrder}>
            <option value="" disabled>Sort by:</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
         </select>
      </div>
       {myFavorites.map(character=>{
          return <Card 
                   id={character.id}
                   name={character.name} 
                   status={character.status} 
                   species={character.species} 
                   gender={character.gender} 
                   origin={character.origin}
                   image={character.image}
                   onClose={onClose}
                />
          }  )
       }
    </div>
    );
 }