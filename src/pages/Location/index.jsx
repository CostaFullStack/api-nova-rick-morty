import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Molecule/Card";

export const Location = () => {
  const [location, setLocation] = useState();

  async function FilterLocation() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    setLocation(data.results);
  }

  useEffect(() => {
    FilterLocation();
  }, []);

  return (
    <Container>
      {location &&
        location.map((element) => (
          <Card
            info1={element.name}
            info2={element.type}
            info3={element.dimension}
          />
        ))}
    </Container>
  );
};
