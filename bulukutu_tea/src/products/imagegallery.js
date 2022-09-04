import React from "react";
import Carousel from "better-react-carousel";

export default function Imagegallery({product}) {

  return (
    <div>
      <Carousel gap={10} loop>
        {product.downloadUrls.map((image) => (
         
            <Carousel.Item key={image}  >
              <img width='50%' alt="product cover" src={image} />
            </Carousel.Item >
           
        ))}
      </Carousel>
    </div>
  );
  // }
}
