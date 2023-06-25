import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import styles from "../components/Detail/Detail.module.css"
import { Link } from "react-router-dom";

const Detail = () => {

    const { id } = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
const [character, setCharacter] = useState({});  

    return(
        
        <>
            {
            character?.name && (
                <div className={styles.general}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img class="img" src={character.image} alt={character.name} />
                        <div className={styles.details}>
                            <span className={styles.name}>Name: {character.name}</span>
                            <span className={styles.about}>Status: {character.status}</span>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.line}>Species: {character.species}</div>
                        <div className={styles.line}>Gender: {character.gender}</div>
                        <div className={styles.line}>Origin: {character.origin?.name}</div>
                    </div>
                    <div className={styles.btns}>
                        <div  className={styles.btnsbtn}></div>
                        <div className={styles.btnsbtn}>
                            <Link to={`/home`} className={styles.volver}>
                                <div>VOLVER ATRAS</div>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            )}
            {/* <Link to={`/home`} className={styles.volver}>
            <div>VOLVER ATRAS</div>
            </Link> */}
        </>

    );
};

export default Detail;