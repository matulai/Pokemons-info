import {
  Button,
  Accordion,
  PokemonInformation,
  PokemonTypes,
} from "@/components";
import { usePokemonQuery } from "@/hooks";
import { PlayIcon } from "@/icons";
import { useRef } from "react";

import "@/styles/PokemonPage.css";

const PokemonPage = () => {
  const { data, error, isLoading } = usePokemonQuery();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  console.log(error?.message);

  return (
    <>
      <div className="pokemon-presentation">
        <img src={data?.imageUrl} alt="Imagen de un pokemon" />
        <audio ref={audioRef} src={data?.criesFile} />
        <Button 
          type="smallCircle" 
          onClick={togglePlay} 
          children={
            <PlayIcon 
              color="black"
              width="100%"
              height="100%"
            />} 
        />
      </div>
      <div className="pokemon-about">
        <Accordion
          title="Information"
          children={
            <PokemonInformation
              title={data!.name}
              informationList={{
                pokedex_number: data!.pokedex_number,
                height: data!.height,
                weight: data!.weight,
              }}
            />
          }
        />
        <Accordion
          title="Types"
          children={<PokemonTypes pokemonInfo={data!} />}
        />
      </div>
    </>
  );
};

export default PokemonPage;
