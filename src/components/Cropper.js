import { useEffect, useRef } from "react";

export function Cropper({ image, onCrop }) {
  const imageRef = useRef(null);
  const cropperRef = useRef(null);

  useEffect(() => {
    const imgElement = imageRef.current;
    const Cropper = window.Cropper;

    if (imgElement) {
      cropperRef.current = new Cropper(imgElement, {
        aspectRatio: 16 / 9,
        crop(event) {
          // onCrop(event);
        },
      });
    }

    return () => {
      if (cropperRef.current) {
        cropperRef.current.destroy();
      }
    };
  }, [image, onCrop]);

  return <img ref={imageRef} src={image.src} />;
}
