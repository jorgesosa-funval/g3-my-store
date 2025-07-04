import { ProductsCard } from "./ProductCard";
import useData from "../hooks/useData";

export function ProductsList({ category }) {
  const {data} = useData(`https://dummyjson.com/products/category/${category}`);

  return (
    <div className="w-full p-4 grid cards-grid gap-6 justify-center" id="card_container" role="contenedor de las tarjetas de cada productos">

      { data &&
        data.products.map((product) => {
          return <ProductsCard
            key={product.id}
            stock={product.stock}
            name={product.title}
            rating={product.rating}
            img={product.thumbnail}
            price={product.price}
          />
        })
      }

    </div>
  )
}