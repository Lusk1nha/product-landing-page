export function Dot(props) {
  const { active, setSlideProps, index } = props

  const changeSlide = () => {
    setSlideProps({
      index,
      translate: index * 100
    })
  }

  return (
    <span 
      className={active ? 'dot active' : 'dot'}
      onClick={changeSlide}
    >
    </span>
  );
}