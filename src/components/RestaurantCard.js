
import { IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

  const { resData } = props;


  const { name, cuisines, avgRating, sla: { deliveryTime }, cloudinaryImageId } = resData?.info;

  return (
    <div className='m-6 p-4 w-[250px] border border-solid bg-gray-100 hover:bg-gray-200 rounded-2xl'>
      <img className='rounded-xl' src={IMAGE_URL + cloudinaryImageId}

      />
      <h3 className='font-bold py-4'>{name}</h3>
      <h4 className="w-25 font-medium">{cuisines.join(",")}</h4>
      <h5 className="font-medium">{avgRating} ⭐</h5>
      <h6 className="font-medium">{deliveryTime} minutes</h6>

    </div>
  )

}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="m-2 p-2 absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </>
    )
  }
}

export default RestaurantCard;