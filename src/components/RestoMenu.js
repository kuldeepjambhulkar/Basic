import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestInfo from "../utils/hooks/useRestInfo";

export default RestoMenu = () => {
    const{id} = useParams();
    const restInfoRaw = useRestInfo(id);
    const restInfo = restInfoRaw?.data?.cards[0]?.card?.card?.info;
    const menuInfo = restInfoRaw?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

    return(
    <>
        {restInfo ?         
            <div className="container mx-auto mt-5">
                <div className="border-2 p-2 rounded">
                    <h1>{restInfo.name}</h1>
                    <p>{restInfo.cuisines} - {restInfo.costForTwoMessage}</p>
                    <p>Location : {restInfo.locality}</p>
                </div>
                <div className="flex flex-wrap">
                    {menuInfo && 
                    menuInfo.map((item) => 
                            {
                                const data = item?.card?.info;
                                return (<div key={data.id} className="border-2 my-1 mx-1 p-4 rounded w-1/4 cursor-pointer">
                                    <b>{data.name}</b>
                                    <p className="mt-4"> Rs. {data.price/100} - ({data.category})</p>
                                    <p>{data.isVeg === 1? "Veg": "Non-Veg"} - Rating : {data.ratings.aggregatedRating.rating}</p>
                                </div>)
                            }
                        )
                    }
                </div>
            </div>: 
            <ShimmerUI/>
        }
    </> 

    )
}