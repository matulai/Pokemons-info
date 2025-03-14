interface PokemonInformationProps {
  title: string;
  informationList: InformationList;
}

interface InformationList {
  pokedex_number: number;
  height: number;
  weight: number;
}

const PokemonInformation = ({
  title,
  informationList,
}: PokemonInformationProps) => {
  return (
    <div className="section_information">
      <h3>{title}</h3>
      {Object.keys(informationList).map((key, index) => (
        <span key={index}>
          {key}: {informationList[key]}{" "}
        </span>
      ))}
    </div>
  );
};

export default PokemonInformation;
