// Gallery page full code and function here
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gallery_1 from '../../assets/gellary/gellary1.png';
import gallery_2 from '../../assets/gellary/gellary2.png';
import gallery_3 from '../../assets/gellary/gellary3.png';
import gallery_4 from '../../assets/gellary/gellary4.png';
import gallery_5 from '../../assets/gellary/gellary5.png';
import gallery_6 from '../../assets/gellary/gellary6.png';
import gallery_7 from '../../assets/gellary/gellary7.webp';
import gallery_8 from '../../assets/gellary/gellary8.png';
import gallery_9 from '../../assets/gellary/gellary9.png';
import gallery_10 from '../../assets/gellary/gellary10.jpeg';

const images = [
  { src: gallery_9, alt: "Image 1" },
  { src: gallery_7, alt: "Image 2" },
  { src: gallery_3, alt: "Image 3" },
  { src: gallery_4, alt: "Image 4" },
  { src: gallery_5, alt: "Image 5" },
  { src: gallery_6, alt: "Image 6" },
  { src: gallery_2, alt: "Image 7" },
  { src: gallery_8, alt: "Image 8" },
  { src: gallery_1, alt: "Image 9" },
  { src: gallery_10, alt: "Image 10" },
];

export default function Gallerydoc() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full aspect-square overflow-hidden  shadow-md border border-orange rounded-2xl cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full  hover:opacity-80 transition duration-200"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </div>
  );
}
