import ResCard from "./ResCard/ResCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [topRatedRestaurant, setTopRatedRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="searchBarContainer">
        <button className="searchBar" onClick={() => {
            const filteredRestaurants = resList.filter(restaurant => restaurant.info.avgRating > 4.3);
            setTopRatedRestaurant(filteredRestaurants);
        }}>
          Search
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
