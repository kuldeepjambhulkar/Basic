import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestInfo from "../utils/hooks/useRestInfo";
import RestoMenuCard from "./RestoMenuCard";

export default RestoMenu = () => {
    const{id} = useParams();
    const restInfoRaw = useRestInfo(id);
    const cardsToRender = restInfoRaw?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(card => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const restInfo = restInfoRaw?.data?.cards[0]?.card?.card?.info;

    return(
    <>
        {restInfo &&         
            <div className="container mx-auto mt-5">
                <div className="border-2 p-2 rounded">
                    <h1>{restInfo.name}</h1>
                    <p>{restInfo.cuisines} - {restInfo.costForTwoMessage}</p>
                    <p>Location : {restInfo.locality}</p>
                </div>
            </div>
        }
        {cardsToRender && 
            cardsToRender.map(card => {
                return <RestoMenuCard data={card}/>
            })
        }
    </> 

    )
}