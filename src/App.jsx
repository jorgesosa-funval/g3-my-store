import { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import CategoryBar from "./components/CategoryBar";
import axios from "axios";



export default function App() {
  const [category, setCategory] = useState("beauty")
  console.log(category)
  return (
    <>
      <Appbar />
      <main>
        <CategoryBar 
          setCategory = {setCategory}
        />
        <ProductsList  
          category = {category}
        />

      </main>
    </>
  )
}

export function ProductsList({category}) {
  const [products, setProducts] = useState([])

  async function fetchData() {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
      console.log(data)
      setProducts(data.products)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [category])
  return (
    <div className="w-full p-4 grid cards-grid gap-6 justify-center" id="card_container" role="contenedor de las tarjetas de cada productos">

      {
        products.map((product) => {
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

export function ProductsCard({ img, name, price, stock, rating }) {
  return (

    <div className="shadow-xl w-80 rounded-md border border-gray-200 cursor-pointer" role="product card">
      <figure className="w-full aspect-square overflow-hidden">
        <img src={img} alt={name} className="w-full object-cover " />
      </figure>
      <div aria-label="card content" className="px-4 pt-2 pb-4 border-t-1 flex flex-col gap-2 border-gray-300 text-gray-600">
        <h3 className="text-xl text-black">{name}</h3>
        <p>Precio: ${price}</p>
        <div className="flex  justify-between">
          <span>Stock: {stock}</span>
          <span>Rating: {rating}</span>
        </div>
      </div>
    </div>
  )
}
