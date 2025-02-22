export const Card = ({ element }) => {
  return (
    <>
      {element.species && (
        <div className="card" key={element.id}>
          <img src={element.image} alt={`Foto do personagem ${element.name}`} />
          <h1>{element.name}</h1>
          <p>{element.status}</p>
          <p>{element.gender}</p>
          <p>{element.species}</p>
        </div>
      )}
      {element.air_date && (
        <div className="card">
          <h1>{element.name}</h1>
          <p>{element.air_date}</p>
          <p>{element.episode}</p>
        </div>
      )}

      {element.dimension && (
        <div className="card">
          <h1>{element.name}</h1>
          <p>{element.type}</p>
          <p>{element.dimension}</p>
        </div>
      )}
    </>
  );
};
