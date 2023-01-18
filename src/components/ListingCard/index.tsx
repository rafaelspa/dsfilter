import "./styles.css";
import ListingCardItem from "../ListingCardItem";
import { ProductDTO } from "../../models/product";

type Props = {
  products: ProductDTO[];
};

export default function ListingCard({ products }: Props) {
  
  return (
    <>
    {products.length !== 0 && (
      <section className="dsf-listing-card-section">
        {products.map((product) => (
            <ListingCardItem key={product.id} productItem={product} />
          ))}
      </section>
    )}
    </>
  );
}
