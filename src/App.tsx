import FilterCard from "./components/FilterCard";
import Home from "./components/Home";
import ListingCard from "./components/ListingCard";

export default function App() {
  return (
    <>
      <Home />
      <main className="dsf-main">
        <FilterCard />
        <ListingCard />
      </main>
    </>
  );
}
