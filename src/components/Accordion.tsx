import { ChevronUpIcon, ChevronDownIcon } from "@/icons";
import { useState, useRef } from "react";
import { Button } from "@/components";

import "@/styles/Accordion.css";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [showAboutContent, setShowAboutContent] = useState<boolean>(false);

  const contentHeight = useRef<HTMLDivElement>(null);

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
        ref={contentHeight}
        className="pokemon-about-container-content"
        style={
          showAboutContent
          ? { height: contentHeight.current ? contentHeight.current.scrollHeight : "auto" }
          : { height: "0px" }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
