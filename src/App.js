import React from "react";
import Header from "./components/Header";
import LocationCards from "./components/LocationCards";
import data from "./data";

export default function App() {
  const cardElements = data.map((item) => {
    return <LocationCards key={item.id} item={item} />;
  });
  return (
    <div>
      <Header />
      <main>
        <section className="cards-list">{cardElements}</section>
      </main>
    </div>
  );
}
