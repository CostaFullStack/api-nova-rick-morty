import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/Molecule/Card";
import { Container } from "../../components/Organism/Container";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState();

  async function FilterEpisode() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    setEpisodes(data.results);
  }

  useEffect(() => {
    FilterEpisode();
  }, []);

  return (
    <Container>
      {episodes &&
        episodes.map((element) => (
          <Card
            info1={element.name}
            info2={element.air_date}
            info3={element.episode}
          />
        ))}
    </Container>
  );
};
