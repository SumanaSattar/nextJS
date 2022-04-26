import Image from 'next/image'
import { useRouter } from "next/router";
const Card = (car: cars) => {
    const router = useRouter();
    return (
        <>

            <div style={{ width: '18rem' }} onClick={() => {
                router.push(`/${car.id}`);
            }}>
                <div>

                    <p className='text-muted m-0'>{car.bodyType} </p>

                    <p className='fw-bold d-sm-block d-md-inline-block'>{car.modelName}</p>
                    <p className='text-muted d-sm-block d-md-inline-block px-1'> {car.modelType}</p>


                    <Image src={require(`../../../public${car.imageUrl}`)} alt={car.modelName} className='card-container_image card-img-top' />
                    <div className='group text-center mt-3'>
                        <a href="#" className="card_btn fw-bold">LEARN <Image src={require('../../../docs/chevron-small.svg')} alt={car.modelName} className='card-container_image card-img-top' />
                        </a>
                        <a href="#" className="card_btn fw-bold">SHOP <Image src={require('../../../docs/chevron-small.svg')} alt={car.modelName} className='card-container_image card-img-top' />
                        </a>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Card;