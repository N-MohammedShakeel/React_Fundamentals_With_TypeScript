import { useState, useEffect } from "react";
import { Products } from "../Product";

const MyComponent = () => {
  // State with type annotation
  const [data, setData] = useState<Products | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>description: {data.description}</p>
          <p>price: {data.price}</p>
          <p>discountPercentage: {data.discountPercentage}</p>
          <p>rating: {data.rating}</p>
          <p>stock: {data.stock}</p>
          <p>brand: {data.brand}</p>
          <p>category: {data.category}</p>
          <p>thumbnail: {data.thumbnail}</p>
          {data.images.map((img) => (
            <img width={500} height={500} src={img} alt="image" />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
