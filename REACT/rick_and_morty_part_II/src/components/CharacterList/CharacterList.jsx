import React from "react";


export const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      
      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => {
        if(character.status === "Alive") {
          return (
            <div className="cardCharacter" key={character.id}>
              <p className="speciesCharacter"> Species : {character.species}</p>
              <img className= "imgCharacter"src={character.image} alt={character.name}/>
              <h2 className ="nameCharacter"> {character.name}</h2>
              <p className="statusCharacter">Status : {character.status}</p>
              <p className = "locationCharacter">Location : {character.location.name}</p>
            </div>

          )
        
        }
        return null;
       
      })}
    </>
  );
};