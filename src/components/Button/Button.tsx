import Image from 'next/image'
function Button({ next , previous, goToSlide, ...rest }:any) {
    const { carouselState: { currentSlide } } = rest;
    return (  
        <>
        <div className="carousel-button-group mx-auto position-absolute" style={{ right:'50px' }}> 
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} style={{ transform: 'rotate(180deg)',border:'none',background:'none' }} ><Image  src={require('../../../docs/chevron-circled.svg')} alt='' />
</button>
      <button onClick={() => next()}style={{position:'relative', border:'none',background:'none' }} ><Image  src={require('../../../docs/chevron-circled.svg')} alt=''  /></button> 
      </div>
        </>
    );
       
        
}

export default Button;