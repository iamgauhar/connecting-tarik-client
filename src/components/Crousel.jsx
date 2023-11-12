
import { ButtonBack, ButtonNext, CarouselProvider, Dot, DotGroup, Image, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { getOffer } from '../../config/apiUrl';
import { useEffect } from 'react';
import { useYourContext } from '../../context/itemContext';
const SlideCrousel = () => {
  const { offer, setOffer } = useYourContext()
  const alloffer = async () => {

    const offerData = await fetch(getOffer, {
      method: 'GET',
    });
    const response = await offerData.json();
    console.log(response)

    setOffer(response.crousels)
  };


  useEffect(() => {
    try {
      alloffer();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (

    <div className='relative'>
      <CarouselProvider

        visibleSlides={1}
        totalSlides={4}
        step={1}
        dragStep={1}
        naturalSlideWidth={100}
        naturalSlideHeight={57}
        isPlaying={true}
        interval={3000}
        infinite={true}
      // hasMasterSpinner={true}
      >

        <Slider className='rounded-md'>
          {
            offer.map((item, i) => {
              return (
                <Slide index={i}>
                  <a href={item.link} target='_blank'>
                    <Image className='object-cover' src={item.image} />
                  </a>
                </Slide>
              )
            })
          }

        </Slider>
        <ButtonBack className='bg-white opacity-70 w-8 h-8 absolute text-white rounded-full flex items-center justify-center top-1/2 -left-4 -translate-y-1/2 border border-cyan-300'><div className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></div></ButtonBack>
        <ButtonNext className='bg-white opacity-70 w-8 h-8 absolute text-white rounded-full flex items-center justify-center -right-4 top-1/2 -translate-y-1/2 border border-cyan-300'><div className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></div></ButtonNext>
        {/* <Dot></Dot> */}

      </CarouselProvider>
    </div>
  )
}

export default SlideCrousel