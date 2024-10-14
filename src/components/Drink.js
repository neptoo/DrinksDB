import React from "react";
import { Link } from "react-router-dom";

const Drink = ({ id, name, category, area, image }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{area}</p>
        <Link to={`/drink/${id}`} className="btn btn-prmary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Drink;
