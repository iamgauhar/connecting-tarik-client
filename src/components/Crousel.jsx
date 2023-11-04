import React from 'react'
import { ButtonBack, ButtonNext, CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
const SlideCrousel = () => {
  return (
    <div className='relative'>
      <CarouselProvider

        visibleSlides={1}
        totalSlides={4}
        step={1}
        dragStep={1}
        naturalSlideWidth={100}
        naturalSlideHeight={56}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >

        <Slider className='rounded-md'>
          <Slide index={0}>
            <Image className='object-cover' src='https://images.unsplash.com/photo-1651132988416-6887d17c90e9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </Slide>
          <Slide index={1}>
            <Image className='object-cover' src='https://images.unsplash.com/photo-1651132988416-6887d17c90e9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </Slide>
          <Slide index={2}>
            <Image className='object-cover' src='https://images.unsplash.com/photo-1651132988416-6887d17c90e9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </Slide>
          <Slide index={3}>
            <Image className='object-cover' src='https://images.unsplash.com/photo-1651132988416-6887d17c90e9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </Slide>

        </Slider>
        <ButtonBack className='bg-white opacity-70 w-10 h-10 absolute text-white rounded-full flex items-center justify-center top-1/2 -left-5 -translate-y-1/2 border border-cyan-300'><div className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></div></ButtonBack>
        <ButtonNext className='bg-white opacity-70 w-10 h-10 absolute text-white rounded-full flex items-center justify-center -right-5 top-1/2 -translate-y-1/2 border border-cyan-300'><div className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></div></ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default SlideCrousel