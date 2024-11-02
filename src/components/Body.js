import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
//import UserContext from "../utils/UserContext";


{/**import { resList } from "../utils/mockData"; */ }



const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const hSearch = (event) => { setSearchText(event.target.value) };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.215423432642982&lng=72.81966235488653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();

    //optional chaining
    setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }




  const ifOnline = useOnlineStatus();

  if (!ifOnline) return <h1>You are offline... please check your internet connectivity</h1>

  //const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body' >
      <div className='filter flex'>
        <div className=" m-4 p-4" >
          <input className='border-black border-solid border px-2 rounded-xl' type="text" value={searchText} onChange={hSearch} placeholder="Search for a restaurant" />
        </div>


        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" data-testid="searchInput" onClick={() => {
          const filteredList = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurants(filteredList);
        }}>
          Search
        </button>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={
            () => {
              const filteredData = listOfRestaurant.filter((res) => res?.info?.avgRating > 4.5);
              setFilteredRestaurants(filteredData);
            }

          }>
            Top rated restaurants
          </button>
        </div>

      </div>
      <div className='flex flex-wrap'>
        {
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

              {
                restaurant.info.avgRating > 4.5 ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />

              }

            </Link>


          ))

        }
      </div>
    </div>



  )
}

export default Body;