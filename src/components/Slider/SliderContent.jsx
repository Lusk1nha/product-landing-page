import '../../styles/slider.scss';

export function SliderContent(props) {  
  return (
    <div className="slider-content">
      {props.children}
    </div>
  );
}