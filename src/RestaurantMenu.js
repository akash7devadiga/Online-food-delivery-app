
import Shimmer from "./components/Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./components/RestaurantCategory";
import { useState } from "react";



export default function RestaurantMenu() {

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);


  const resInfo = useRestaurantMenu(resId);



  if (resInfo === null) return <Shimmer />

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  //console.log(categories);






  return (
    <>


      <h1 className="text-center font-bold my-8 text-xl ">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p className="text-center text-lg font-bold">{resInfo?.cards[2]?.card?.card?.info?.avgRating} ⭐ - {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</p>
      {
        categories.map((category, index) => (
          <RestaurantCategory data={category?.card?.card} showList={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))
      }
    </>

  )
}