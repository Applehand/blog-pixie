import { useEffect, useRef } from 'react';


export function Cropper({image, onCrop}) {
    const imageRef = useRef(null)
    const cropperRef = useRef(null);

    useEffect(() => {
        const imgElement = imageRef.current
        const Cropper = window.Cropper

        if (imgElement) {
            cropperRef.current = new Cropper(imgElement, {
                aspectRatio: 16 / 9,
                crop(event) {
                    console.log(event.detail)
                }
            })
        }

        return () => {
            if (cropperRef.current) {
                cropperRef.current.destroy();
            }
        };
    }, [image])
    
    return (
        <img ref={imageRef} src={image.src} />
    );
  }