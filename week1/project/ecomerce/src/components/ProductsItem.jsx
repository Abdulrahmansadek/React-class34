function ProductsItem({ items }) {
  return (
    <div className="card">
      <span className="img-container">
        <img src={items.image} />
      </span>
      <span className="title-container">
        <p>{items.title}</p>
      </span>
    </div>
  );
}

export default ProductsItem;
