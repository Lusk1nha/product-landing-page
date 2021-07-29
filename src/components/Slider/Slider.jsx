import { useState } from 'react';

import { SliderContent } from './SliderContent'; 
import { Slide } from './Slide';

import { Dots } from './Dots';

import '../../styles/slider.scss'

export function Slider(props) {
  const [slideProps, setSlideProps] = useState({index: 0, translate: 0})
  const { index, translate } = slideProps

  return (
    <div className="slider">
      <SliderContent translate={slideProps.translate}>
        {props.images.map((image, i) => (
          <Slide key={image+i} content={image} />
        ))}
      </SliderContent>

      <Dots slides={props.images} index={index} setSlideProps={setSlideProps} />
    </div>
  );
}