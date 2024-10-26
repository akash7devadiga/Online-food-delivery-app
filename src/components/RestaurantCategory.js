import { useState } from "react";
import ItemsList from "./ItemsList";


const RestaurantCategory = ({ data, showList, setShowIndex }) => {

  console.log(data);

  // const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 text-center cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between">
          <span className="font-bold text-lgt">{data.title} ({data.itemCards.length})</span>
          <span>🡻</span>
        </div>
        {showList && <ItemsList items={data?.itemCards} />}

      </div>

    </div>


  )
}

export default RestaurantCategory;