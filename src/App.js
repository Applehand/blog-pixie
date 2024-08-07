import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

function App() {
  const [targetWidth, setTargetWidth] = useState(1200);
  const [targetHeight, setTargetHeight] = useState(628);
  const [imageFile, setImageFile] = useState(null);
  const [filename, setFilename] = useState("");

  const containerRef = useRef(null);
  const sourceCanvRef = useRef(null);
  const cropCanvRef = useRef(null);
  const targetCanvRef = useRef(null);

  const onFileChange = (file) => {};

  const inputProps = {
    targetWidth,
    setTargetWidth,
    targetHeight,
    setTargetHeight,
    filename,
    setFilename,
  };

  const canvasProps = {
    targetWidth,
    targetHeight,
    onFileChange,
    imageFile,
    setImageFile,
    containerRef,
    sourceCanvRef,
    cropCanvRef,
    targetCanvRef,
  };

  function exchangeImage() {
    if (imageFile) {
      const targCanv = targetCanvRef.current;
      const ctx = targCanv.getContext("2d");
      targCanv.width = targetWidth;
      targCanv.height = targetHeight;

      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, targCanv.width, targCanv.height);
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        const dataURL = targCanv.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = filename || "filename.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      img.src = URL.createObjectURL(imageFile);
    } else {
      alert("Upload an image, ya dingus!");
    }
  }

  return (
    <div>
      <header>
        <h1>PIXIE</h1>
        <h2>a Practical Image eXchange with Instant Editing</h2>
      </header>
      <main>
        <CanvasContainer {...canvasProps} />
        <InputsContainer {...inputProps} />
        <div>
          <button onClick={exchangeImage}>Exchange!</button>
        </div>
      </main>
    </div>
  );
}

function CanvasContainer({
  targetWidth,
  targetHeight,
  onFileChange,
  imageFile,
  setImageFile,
  containerRef,
  sourceCanvRef,
  cropCanvRef,
  targetCanvRef,
}) {
  const onDragEnter = (e) => {
    e.preventDefault();
    containerRef.current.classList.add("dragover");
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    containerRef.current.classList.add("dragover");
  };

  const onDragLeave = () => {
    containerRef.current.classList.remove("dragover");
  };

  const onDrop = (e) => {
    e.preventDefault();
    containerRef.current.classList.remove("dragover");

    if (e.dataTransfer.files) {
      const newFile = e.dataTransfer.files[0];
      onFileChange(newFile);
      if (newFile.type.includes("image")) {
        setImageFile(newFile);
      } else {
        alert("Upload an image, ya dingus :)");
      }
    }
  };

  useEffect(() => {
    const ctx = sourceCanvRef.current.getContext("2d");
    if (imageFile) {
      const canvRatio =
        sourceCanvRef.current.width / sourceCanvRef.current.height;
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(
          0,
          0,
          sourceCanvRef.current.width,
          sourceCanvRef.current.height
        );
        const imgRatio = img.width / img.height;
        let width, height, offsetX, offsetY;
        if (imgRatio > canvRatio) {
          width = sourceCanvRef.current.width;
          height = sourceCanvRef.current.width / imgRatio;
          offsetX = 0;
          offsetY = (sourceCanvRef.current.height - height) / 2;
        } else {
          width = sourceCanvRef.current.height * imgRatio;
          height = sourceCanvRef.current.height;
          offsetX = (sourceCanvRef.current.width - width) / 2;
          offsetY = 0;
        }
        ctx.drawImage(img, offsetX, offsetY, width, height);
      };
      img.src = URL.createObjectURL(imageFile);
    } else {
      ctx.clearRect(
        0,
        0,
        sourceCanvRef.current.width,
        sourceCanvRef.current.height
      );
      ctx.textAlign = "center";
      ctx.font = "2rem Arial";
      ctx.fillText(
        "Drag an image here!",
        sourceCanvRef.current.width / 2,
        sourceCanvRef.current.height / 2
      );
    }
  }, [imageFile]);

  const clearImage = () => {
    setImageFile(null);
  };

  return (
    <div
      id="canvas-container"
      ref={containerRef}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {imageFile && (
        <button id="clear-image-button" onClick={clearImage}>
          X
        </button>
      )}
      <canvas
        id="source-canvas"
        width="800"
        height="400"
        ref={sourceCanvRef}
      ></canvas>
      <canvas
        id="crop-canvas"
        width="800"
        height="400"
        ref={cropCanvRef}
      ></canvas>
      <canvas
        id="target-canvas"
        width={targetWidth}
        height={targetHeight}
        ref={targetCanvRef}
      ></canvas>
    </div>
  );
}

function InputsContainer({
  targetWidth,
  setTargetWidth,
  targetHeight,
  setTargetHeight,
  filename,
  setFilename,
}) {
  return (
    <div id="inputs-container">
      <div>
        <label htmlFor="target-width">Target Width</label>
        <input
          type="number"
          id="target-width"
          name="target-width"
          value={targetWidth}
          onChange={(e) => setTargetWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="target-height">Target Height</label>
        <input
          type="number"
          id="target-height"
          name="target-height"
          value={targetHeight}
          onChange={(e) => setTargetHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="filename">Filename</label>
        <input
          type="text"
          id="filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
