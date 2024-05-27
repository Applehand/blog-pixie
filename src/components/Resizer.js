import { useEffect, useRef } from "react";

export function Resizer({ image, newWidth, newHeight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.drawImage(image, 0, 0, newWidth, newHeight);
    }
  }, [image, newWidth, newHeight]);

  return <canvas ref={canvasRef} width={newWidth} height={newHeight} />;
}
