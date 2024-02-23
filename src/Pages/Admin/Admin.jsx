import React, { useState, useEffect } from 'react';
import Header from '../../componentes/Header/Header';
import GameForm from '../../componentes/GameForm/GameForm';

import './admin.css';

function Admin() {

  const [games, setGames] = useState([]);
  

  useEffect (() => {
    const fakeGame = [
      {name: 'Game 1', category: 'Action', description: 'hehehe'}
    ];
    setGames(fakeGame);
  }, []);

 

  return (
    <>
      <Header />
          
          <div className='gameForm'>
            <GameForm />
          </div>

    </>
    
  );
}

export default Admin;

