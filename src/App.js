import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

function App() {
  const [targetWidth, setTargetWidth] = useState(1200);
  const [targetHeight, setTargetHeight] = useState(628);
  const [imageFile, setImageFile] = useState(null);
  const [filename, setFilename] = useState("");

  const onFileChange = (files) => {
    console.log(files);
  };

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
  };

  return (
    <div>
      <header>
        <h1>PIXIE</h1>
        <h2>a Practical Image eXchange with Instant Editing</h2>
      </header>
      <main>
        <CanvasContainer
          {...canvasProps}
          onFileChange={(files) => onFileChange(files)}
        />
        <InputsContainer {...inputProps} />
        <div>
          <a type="button" href="/#">
            Exchange!
          </a>
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
}) {
  
  const containerRef = useRef(null);
  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    containerRef.current.classList.add("dragover");
  };
  const onDragLeave = () => containerRef.current.classList.remove("dragover");
  const onDrop = (e) => {
    if (e.dataTransfer.files) {
      e.preventDefault();
      e.stopPropagation();
      containerRef.current.classList.remove("dragover");

      const newFiles = e.dataTransfer.files;
      if (newFiles.length > 0) {
        onFileChange(newFiles);
        [...newFiles].forEach((file) => {
          if (file.type.includes("image")) {
            setImageFile(file);
          }
        });
      }
    }
  };

  return (
    <div
      id="canvas-container"
      ref={containerRef}
      onDragEnter={onDragEnter}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <canvas id="source-canvas" width="800" height="400"></canvas>
      <canvas id="crop-canvas" width="800" height="400"></canvas>
      <canvas
        id="target-canvas"
        width={targetWidth}
        height={targetHeight}
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
