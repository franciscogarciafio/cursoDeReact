import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PeopleId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((res) => res.json())
      .then((characterInfo) => setCharacter(characterInfo));
  }, [id]);

  return (
    <div>
      {Object.keys(character).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <p>name: {character.name}</p>
          <p>height: {character.height}</p>

          <Link to={'/people'}>Back</Link>
        </div>
      )}
    </div>
  );
};

export default PeopleId;
