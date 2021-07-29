import { Dot } from './Dot';

export function Dots(props) {
  const { slides, index, setSlideProps } = props

  return (
    <section className="dots-container">
      {slides.map((slide, i) => (
        <Dot key={slide} index={i} active={index === i} setSlideProps={setSlideProps} />
      ))}
    </section>
  );
}