import { ChevronUpIcon, ChevronDownIcon } from "@/icons";
import { useState } from "react";
import { Button } from "@/components";

import "@/styles/Accordion.css";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [showAboutContent, setShowAboutContent] = useState<boolean>(false);

  return (
    <div className="pokemon-about-container">
      <div className="pokemon-about-container-header">
        {title}
        <Button
          type="onlyIcon"
          children={
            showAboutContent ? (
              <ChevronUpIcon color="black" />
            ) : (
              <ChevronDownIcon color="black" />
            )
          }
          onClick={() => setShowAboutContent(!showAboutContent)}
        />
      </div>
      <div
        className={`pokemon-about-container-content ${
          showAboutContent ? "" : "no-active"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
