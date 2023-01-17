import './styles.css';

export default function FilterCard() {
  return (
    <section className="dsf-filter-card-container">
      <form className="dsf-filter-card-form">
        <input name="minimumPrice" type="text" placeholder="Preço mínimo" />
        <input name="maximumPrice" type="text" placeholder="Preço máximo" />
        <input name="filter" type="submit"  />
      </form>
    </section>
  );
}
