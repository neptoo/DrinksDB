import React from "react";
import Drink from "./Drink";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const DrinkList = () => {
  const { drinks, loading } = useGlobalContext();
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
    <div>
      <h2>Drink list component</h2>
    </div>
  );
};

export default DrinkList;
