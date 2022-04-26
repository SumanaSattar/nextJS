import React from "react";
import Card from "../src/components/Card/card";
import type {  NextPage } from "next";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../src/components/Button/Button";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1194 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1194, min: 888 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 888, min: 624 },
    items: 2,
    partialVisibilityGutter: 60
  },
  mobile: {
    breakpoint: { max: 270, min: 0 },
    items: 1,
    partialVisibilityGutter: 40
  }
};
const Home:NextPage=()=> {
    
    const [cars, setCars] = useState<cars[]>([]);
    const fetchCars = async () => {
      const response = await fetch("/api/cars");
      const data = await response.json();
    
      setCars(data);
    };
  
    useEffect(() => {
      fetchCars();
      }, []);
  return (
   <>
     <div
     
  style={{
    position: 'relative',
    marginTop:'29px',
    marginLeft:'30px'
  }}
>
<Carousel 
      swipeable={false}
      draggable={false}
      autoPlay={false}
      autoPlaySpeed={10000}
      ssr={true}
      arrows={false}
      containerClass="container-padding-bottom"
      customButtonGroup={<Button />}
      renderButtonGroupOutside
      responsive={responsive}>
      {cars.map((car:cars,index)=>(
         <Card modelName={car.modelName} bodyType= {car.bodyType} modelType={car.modelType} imageUrl={car.imageUrl} key={car.id} id={car.id} />
      ))}
      </Carousel>
     

</div>
      
        
       

    
   </>
  );
}


export default Home;
