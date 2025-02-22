import axios from "axios";
import { useEffect, useState } from "react";
import { SelectComponent } from "../../components/Atom/Select";
import { especiesOp, generosOp, statusOp } from "../../utils/opcoes";
import { Container } from "../../components/Organism/Container";
import { Card } from "../../components/Molecule/Card";

export const Character = () => {
  const [characters, setCharacters] = useState();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");

  async function FilterOrSearch(url) {
    setCharacters(null);
    const { data } = await axios.get(url);
    setCharacters(data.results);
  }

  useEffect(() => {
    name || status || gender || specie
      ? FilterOrSearch(
          `https://rickandmortyapi.com/api/character?name=${name}&species=${specie}&gender=${gender}&status=${status}`
        )
      : FilterOrSearch("https://rickandmortyapi.com/api/character");
  }, [name, status, gender, specie]);
  return (
    <>
      <input
        type="text"
        name="#"
        id="#"
        onChange={(element) => setName(element.target.value)}
      />

      <SelectComponent
        opcoes={statusOp}
        onChange={(element) => setStatus(element.target.value)}
      />

      <SelectComponent
        opcoes={generosOp}
        onChange={(element) => setGender(element.target.value)}
      />

      <SelectComponent
        opcoes={especiesOp}
        onChange={(element) => setSpecie(element.target.value)}
      />
      <Container>
        {characters && characters.map((element) => <Card element={element} />)}
      </Container>
    </>
  );
};
