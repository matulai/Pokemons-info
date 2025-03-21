import { ChevronUpIcon, ChevronDownIcon } from "@/icons";
import { useState } from "react";
import { Button } from "@/components";

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
              <ChevronDownIcon color="black" />
            ) : (
              <ChevronUpIcon color="black" />
            )
          }
          onClick={() => setShowAboutContent(!showAboutContent)}
        />
      </div>
      <div
        className={
          showAboutContent
            ? "pokemon-about-container-content"
            : "pokemon-about-container-content no-visible"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
