import '../styles/product-details.scss';

export function ProductDetails() {
  return (
    <div className="product">
      <h2 className="name">Any product</h2>

      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt dolore quod nemo modi earum nulla reprehenderit odit voluptas in dolor neque, delectus quasi obcaecati quam cumque sequi hic veritatis.
      </p>

      <button className="btn btn--buy" type="button" aria-pressed={true}>Order now</button>
    </div>
  );
}