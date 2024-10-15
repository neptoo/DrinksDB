import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleDrink = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState(null);
  const fetchSingleDrink = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strGlass: glass,
          strAlcoholic: info,
          strDrinkThumb: image,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newDrink = {
          name,
          image,
          glass,
          info,
          category,
          instructions,
          ingredients,
        };
        setDrink(newDrink);
      } else {
        setDrink(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchSingleDrink();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!drink) {
    return <h2 className="section-title">no drink to display</h2>;
  }
  const { name, image, glass, info, category, instructions, ingredients } =
    drink;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back to home
      </Link>
      <h2 className="section-title">{name} </h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleDrink;
