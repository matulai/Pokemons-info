import { PlayIcon, ChevronUpIcon, ChevronDownIcon } from "@/icons";
import { usePokemonQuery } from "@/hooks";
import { useState } from "react";
import { Button } from "@/components";
import { useRef } from 'react';

const PokemonPage = () => {
  const { data, error, isLoading } = usePokemonQuery();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [showAboutContent, setShowAboutContent] = useState<boolean>(false);

  const togglePlay = () => {
    if (audioRef.current) {
        audioRef.current.play();
    }
  };

  if(isLoading) {
    return <div>loading...</div>
  }

  console.log(error);

  return (
    <div>
      <div className="pokemon-presentation">
        <img src={data?.imageUrl} alt="Imagen de un pokemon"/>
        <audio ref={audioRef} src={data?.criesFile} />
        <Button onClick={togglePlay} children={<PlayIcon color="yellow" />} />
      </div>
      <div className="pokemon-about">
        <div className="pokemon-about-container">
          <div className="pokemon-about-container-header">
            Information
            <Button 
              children={showAboutContent 
                ? <ChevronDownIcon color="yellow" />
                : <ChevronUpIcon color="yellow" />} 
              onClick={() => setShowAboutContent(!showAboutContent)}
            />
          </div>
          <div className="pokemon-about-container-content">

          </div>
        </div>
        <div>Evolutions</div>
        <div>Encounters</div>
      </div>
    </div>
  )
};

export default PokemonPage;
