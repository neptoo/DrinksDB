import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [drinks, setDrinks] = useState([]);
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      // console.log(data);

      // const { meals } = data;
      // if (meals) {
      //   const newDrinks = meals.map((item) => {
      //     const { idMeal, strMeal, strCategory, strArea, strMealThumb } = item;
      //     return {
      //       id: idMeal,
      //       name: strMeal,
      //       category: strCategory,
      //       area: strArea,
      //       image: strMealThumb,
      //     };
      //   });
      //   setDrinks(newDrinks);
      // } else {
      //   setDrinks([]);
      // }

      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            category: strGlass,
            area: strAlcoholic,
            image: strDrinkThumb,
          };
        });
        setDrinks(newDrinks);
      } else {
        setDrinks([]);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider value={{ loading, drinks, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
