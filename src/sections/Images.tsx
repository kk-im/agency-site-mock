import { images } from "../constants";

export default function Images() {
  return (
    <div>
      <div className=" grid-cols grid grid-cols-5 gap-5">
        {images.map((image) => {
          return (
            <img src={image.url} alt={image.title} className="aspect-[5/7]" />
          );
        })}
      </div>
    </div>
  );
}
