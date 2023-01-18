import { useEffect, useState } from "react";
import FilterCard from "./components/FilterCard";
import Home from "./components/Home";
import ListingCard from "./components/ListingCard";
import { ProductDTO } from "./models/product";
import { ContextProductCount } from "./utils/context-product";

export default function App() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [contextProductCount, setContextProductCount] = useState<number>(0);

  function handleNewProducts(newProducts: ProductDTO[]) {
    setProducts(newProducts);
  }

  return (
    <>
      <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
        <Home />
        <main className="dsf-main">
          <FilterCard filterProducts={handleNewProducts} />
          {products && (
            <>
              <ListingCard products={products} />
            </>
          )}
        </main>
      </ContextProductCount.Provider>
    </>
  );
}
