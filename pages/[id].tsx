
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Home() {
  const router = useRouter();

  const { id } = router.query;

  const [car, setCar] = useState<cars>();

  const fetchCar = async () => {
    const response = await fetch(`/api/cars/${id}`);
    const data = await response.json();
    console.log({ data: data });
    setCar(data);
  };

  console.log(car);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div>
    

      
        {car && (
          <div className="container mt-5" style={{ display: "flex" }}>
            <Image  src={require(`../public${car.imageUrl}`)} alt={car.modelName} className='card-container_image card-img-top' />
               
            <div className="mx-5">
              <h1>{car.modelName}</h1>
              <p>{car.modelType} </p>
            </div>
          </div>
        )}
      
    </div>
  );
}