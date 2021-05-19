import React, { useState, useEffect } from "react";
import "./App.css";

function DrinkDetail({ match }) {
  useEffect(() => {
    fetchDrink();
    // console.log(match);
  }, []);

  const [drink, setDrink] = useState({
    //   images: {}
  });

  const fetchDrink = async () => {
    const fetchDrink = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    );
    const drink = await fetchDrink.json();
    // console.log(drink);
    setDrink(drink);
  };

  return (
    <div>
      <h1>{drink.strDrink}</h1>
      {/* <img src={} alt="img" srcset="" /> */}
    </div>
  );
}

export default DrinkDetail;
