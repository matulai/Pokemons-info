interface contentImages {
  title: string;
  images: string[];
}

const ImagesList = ({ title, images }: contentImages) => {
  return (
    <div>
      <span>{title}</span>
      {images.map((imageUrl: string, index: number) => (
        <img key={index} src={imageUrl} alt="type icon" />
      ))}
    </div>
  )
}

export default ImagesList;