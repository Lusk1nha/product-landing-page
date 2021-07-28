import { useState } from 'react';

import { SliderContent } from './SliderContent'; 
import { Slide } from './Slide';
import { Arrow } from './Arrow';

import '../../styles/slider.scss'

export function Slider(props) {
  const { images } = props
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    if (index === props.images.length - 1) {
      return setIndex(0)
    }

    setIndex(index + 1)
  }

  const prevSlide = () => {
    if ( index === 0 ) {
      return setIndex(props.images.length - 1)
    }

    setIndex(index - 1)
  }

  return (
    <div className="slider">
      <SliderContent>
        {props.images.map((image, i) => (
          <Slide key={image+i} content={image} />
        ))}
      </SliderContent>
        
      <div className="arrow-container">
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />
      </div>
    </div>
  );
}