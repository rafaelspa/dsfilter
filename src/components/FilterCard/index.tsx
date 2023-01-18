import { useContext, useState } from "react";
import { findByPrice } from "../../services/product-service";
import { ContextProductCount } from "../../utils/context-product";
import "./styles.css";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
  filterProducts: Function;
};

export default function FilterCard({ filterProducts }: Props) {
  const [formData, setFormData] = useState<FormData>({});
  const { setContextProductCount } = useContext(ContextProductCount);

  function handleInputChange(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    let products = findByPrice(
      formData.minPrice || 0,
      formData.maxPrice || Number.MAX_VALUE
    );
    setContextProductCount(products.length);
    filterProducts(products);
    return;
  }

  return (
    <section className="dsf-filter-card-container">
      <form className="dsf-filter-card-form" onSubmit={handleSubmit}>
        <input
          name="minPrice"
          value={formData?.minPrice || ""}
          type="text"
          placeholder="Preço mínimo"
          onChange={handleInputChange}
        />
        <input
          name="maxPrice"
          value={formData?.maxPrice || ""}
          type="text"
          placeholder="Preço máximo"
          onChange={handleInputChange}
        />
        <button name="filter" type="submit">
          Filtrar
        </button>
      </form>
    </section>
  );
}
