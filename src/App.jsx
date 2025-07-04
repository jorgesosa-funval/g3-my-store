import {useState } from "react";
import Appbar from "./components/Appbar";
import CategoryBar from "./components/CategoryBar"; 
import { ProductsList } from "./components/ProductsList";



export default function App() {
  const [category, setCategory] = useState("beauty");
  return (
    <>
      <Appbar />
      <main>
        <CategoryBar
          setCategory={setCategory}
          selectedCategory={category}
        />
        <ProductsList
          category={category}
        />

      </main>
    </>
  )
}




