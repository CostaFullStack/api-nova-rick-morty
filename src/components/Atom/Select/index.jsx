export const SelectComponent = ({ opcoes, onChange }) => {
  return (
    <select name="#" id="#" onChange={onChange}>
      {opcoes &&
        opcoes.map((element) => (
          <option value={element.valor}>{element.texto}</option>
        ))}
    </select>
  );
};
