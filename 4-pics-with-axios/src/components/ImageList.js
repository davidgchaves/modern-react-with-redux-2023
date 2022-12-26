import "./ImageList.css";
import ImageShow from "./ImageShow";

const ImageList = ({ id, images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={id} image={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
