import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";
import "./styles.css";

export default function Home() {
  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <header className="dsf-header">
      <div className="dsf-header-container">
        <h1 className="dsf-header-title">DSFilter</h1>
        <div className="dsf-header-product-count">
          {contextProductCount} produto(s)
        </div>
      </div>
    </header>
  );
}
