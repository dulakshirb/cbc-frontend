export default function ProductCard(props) {
  console.log(props);

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />
      <h2>{props.price}</h2>
      <button>Add to cart</button>
      <hr />
    </div>
  );
}
