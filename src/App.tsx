import { useEffect, useState } from "react";
import FilterCard from "./components/FilterCard";
import Home from "./components/Home";
import ListingCard from "./components/ListingCard";
import { ProductDTO } from "./models/product";

export default function App() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  function handleNewProducts(newProducts: ProductDTO[]) {
    setProducts(newProducts);
  }

  return (
    <>
      <Home />
      <main className="dsf-main">
        <FilterCard filterProducts={handleNewProducts}/>
        {
          products &&
        <>
          <ListingCard products={products} />
        </>
        }
      </main>
    </>
  );
}
