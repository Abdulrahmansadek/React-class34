import useFetch from "../Hooks/useFetch";

const Categories = ({ handleCategories, selectedCategory }) => {
  let url = "https://fakestoreapi.com/products/categories";
  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  } else
    return (
      <>
        <div className="categories-container">
          {data.map((item, idx) => {
            return (
              <button
                className={
                  selectedCategory === item ? "selected" : "category-item"
                }
                key={idx}
                value={item}
                onClick={() => handleCategories(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </>
    );
};

export default Categories;
