import Shimmer from "../Shimmer/Shimmer";
import ResCard from "./ResCard/ResCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [topRatedRestaurant, setTopRatedRestaurant] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  console.log(restaurantName);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.5292791&lng=75.0324043&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // console.log(json);
    setresList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setTopRatedRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return topRatedRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchBarContainer">
        <div>
          <input
            type="text"
            placeholder="Search Restaurant"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <button
            onClick={() => {
              const filterRestaurants = resList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(restaurantName.toLowerCase())
              );
              setTopRatedRestaurant(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="searchBar"
          onClick={() => {
            const filteredRestaurants = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setTopRatedRestaurant(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resListContainer">
        {topRatedRestaurant.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
