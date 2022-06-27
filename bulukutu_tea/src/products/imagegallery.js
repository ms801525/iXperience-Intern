import React, {useEffect, useState} from 'react'
import ProductsService from '../products/services/product.service'
import {Carousel} from 'better-react-carousel'

export default function Imagegallery() {

    const [pictures,setPictures] = useState([])
    
    useEffect(()=>{
      fetchProducts();
    }, [])
  
    async function fetchProducts(){
      try {
        const pictures = await ProductsService.fetchProducts();
        setPictures(pictures);
      } catch (err) {
  
      }
    }

        return (
            <div >
                {
          pictures.map(product =>
            <div key={product.id}>
            <Carousel  gap={10} loop >
                <Carousel.Item>
                    <img width="100%" src={product.downloadUrl} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={product.downloadUrl[1]} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={product.downloadUrl[2]} />
                </Carousel.Item>
            </Carousel>
            </div>
          )
        }
            </div>
        )
// }
}
