import '../../styles/slider.scss';

export function Slide(props) {
  return (
    <img className="slide" src={props.content} alt="Random" />
  );
}