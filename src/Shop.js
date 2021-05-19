import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchDrinks();
  }, []);

  const [drinks, setDrinks] = useState([]);

  const fetchDrinks = async () => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    );
    const drinks = await data.json();
    // console.log(drinks.drinks);
    setDrinks(drinks.drinks);
  };

  return (
    <div>
        {drinks.map((drink) => (
          <h3 key={drink.idDrink}>
            <Link to={`/shop/${drink.idDrink}`}>
              {drink.strDrink}
            </Link>
          </h3>
        ))}
    </div>
  );
}

export default Shop;
