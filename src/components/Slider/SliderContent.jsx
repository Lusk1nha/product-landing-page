import '../../styles/slider.scss';

export function SliderContent(props) {  
  return (
    <div className="slider-content" style={{transform: `translateX(-${props.translate}%)`}} >
      {props.children}
    </div>
  );
}