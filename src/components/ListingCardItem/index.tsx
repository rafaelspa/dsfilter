import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  productItem: ProductDTO;
};

export default function ListingCardItem({ productItem }: Props) {
  
  return (
    <div className="dsf-listing-card-container">
      {
        productItem &&
        <>
         <h3 className="dsf-listing-card-item-title">{productItem.name}</h3>
         <p className="dsf-listing-card-item-price">R$ {productItem.price.toFixed(2)}</p>
        </>
      }
    </div>
  );
}
