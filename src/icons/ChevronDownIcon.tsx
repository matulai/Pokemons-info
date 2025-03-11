interface ChevronDownIconProps {
  color: string;
}

const ChevronDownIcon = ({ color }: ChevronDownIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-chevron-down">
        <path d="m6 9 6 6 6-6"/>
      </svg>
  )
}

export default ChevronDownIcon;