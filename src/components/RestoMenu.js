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
            <div className="container">
                <h1>{restInfo.name}</h1>
                <p>{restInfo.cuisines} - {restInfo.costForTwoMessage}</p>
                <p>Location : {restInfo.locality}</p>
                <>
                    {menuInfo && 
                    menuInfo.map((item) => 
                            {
                                const data = item?.card?.info;
                                return <p key={data.id}><b>{data.name}</b> <br /> Rs. {data.price/100} -({data.category}) <br /> {data.isVeg === 1? "Veg": "Non-Veg"} - Rating : {data.ratings.aggregatedRating.rating} </p>
                            }
                        )
                    }
                </>
            </div>: 
            <ShimmerUI/>
        }
    </> 

    )
}