import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';

export function Arrow(props) {
  const { direction, handleClick } = props

  return (
    <div className="arrow" onClick={handleClick}>
      <img 
        src={direction === 'left' ? leftArrow : rightArrow}
        alt={direction === 'left' ? 'left' : 'right'} 
      />
    </div>
  );
}