interface PauseIconProps {
  color: string;
  width: string;
  height: string;
}

const PlayIcon = ({ color, width, height }: PauseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 4L18 12L6 20V4Z" fill={color} />
    </svg>
  );
};

export default PlayIcon;
