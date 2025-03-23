import "@/styles/ImagesList.css";

interface contentImages {
  title: string;
  images: string[];
}

const ImagesList = ({ title, images }: contentImages) => {
  return (
    <div className="images-list">
      <span>{title}</span>
      <div className="images-list-items">
        {images.map((imageUrl: string, index: number) => (
          <img key={index} src={imageUrl} alt="type icon" />
        ))}
      </div>
    </div>
  );
};

export default ImagesList;
