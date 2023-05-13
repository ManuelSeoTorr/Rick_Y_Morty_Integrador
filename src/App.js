import './App.css';
//Componentes//
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav.jsx';
import Detail from './views/Detail';
import About from './views/About';
import Form from './components/Form/Form';
//Router-Dom
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route , Routes, useNavigate } from 'react-router-dom';

function App() {
   const [characters,setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const newCharacters = characters.filter(char => char.id !== id)
      setCharacters(newCharacters)
   }

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'Password12';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path = "/" element={<Form login = {login} />}></Route>
            <Route path = "/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path = "/about" element={<About/>}></Route>
            <Route path = "/detail/:id" element={<Detail/>}></Route>
         </Routes>

      </div>
   );
}

export default App;
