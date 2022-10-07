import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
  const [people, setPeople] = useState({});

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((peopleres) => setPeople(peopleres));
      
  }, []);
console.log(setPeople);
  return (
    <div>
      {Object.keys(people).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {people.results.map((character) => {
            /* Sorry, la API no devuelve el id y tengo que hacer esto */
            const id = character.url.split('/')[5];
            return (
              <div key={id}>
                <Link to={`/people/${id}`}>{character.name}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default People;