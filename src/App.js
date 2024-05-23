import { useEffect } from 'react';
import './App.css';
import logo from './applehands.png';

function App() {
  useEffect(() => {
    const image = document.getElementById('image');
    if (image) {
      const Cropper = window.Cropper;
      const cropper = new Cropper(image, {
        aspectRatio: 16 / 9,
        crop(event) {
          console.log(event.detail.x);
          console.log(event.detail.y);
          console.log(event.detail.width);
          console.log(event.detail.height);
          console.log(event.detail.rotate);
          console.log(event.detail.scaleX);
          console.log(event.detail.scaleY);
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>PIXIE</h1>
      <div>
        <img id="image" src={logo}></img>
      </div>
    </div>
  
  );
}

export default App;
