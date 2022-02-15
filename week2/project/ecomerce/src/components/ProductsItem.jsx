function ProductsItem({ items }) {
  return (
    <div className="card">
      <span className="img-container">
        <img src={items.image} alt={items.title} className="img-product" />
      </span>
      <span className="title-container">
        <p>{items.title}</p>
      </span>
    </div>
  );
}

export default ProductsItem;
