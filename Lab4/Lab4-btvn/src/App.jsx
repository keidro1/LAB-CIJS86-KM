import React, { useState } from 'react';
import "./App.css"

function App() {
  const images = [
    "https://content2.kawasaki.com/ContentStorage/KMV/Products/4905/a7973783-9ab6-448e-a04e-768785a34988.jpg?w=510&h=340&mode=crop",
    "https://content2.kawasaki.com/ContentStorage/KMV/Products/4905/0417767f-631d-4bad-898f-e9910af436b7.jpg?w=510&h=340&mode=crop",
    "https://content2.kawasaki.com/ContentStorage/KMV/Products/4905/f0dd70ad-0c05-46df-ac77-91e81a30cd23.jpg?w=510&h=340&mode=crop", 
    "https://content2.kawasaki.com/ContentStorage/KMV/Products/4887/ee80b0a8-7c2c-495e-bbc9-6dcdd3184315.jpg?w=510&h=340&mode=crop",
    "https://content2.kawasaki.com/ContentStorage/KMV/Products/4887/ce345be3-1230-439e-ae8f-5c915f1a9af2.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="">
      <div className="image-preview">
        <img src={currentImage} alt={currentImage} />
      </div>
      <div className="image-list">
        {images.map((image, index) => (
          <div
            key={index}
            className="image"
            onClick={() => setCurrentImage(image)}
          >
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
