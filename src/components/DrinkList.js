import React from "react";
import Drink from "./Drink";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const DrinkList = () => {
  const { drinks, loading } = useGlobalContext();
  console.log("drinks", drinks);
  if (loading) {
    return <Loading />;
  }
  if (drinks.length < 1) {
    return (
      <h2 className="section-title">
        no drinks matched to your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">drinks</h2>
      <div className="cocktails-center">
        {drinks.map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default DrinkList;
