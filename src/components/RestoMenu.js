import { useState, useEffect } from "react"
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

export default RestoMenu = () => {
    const [restInfo, setRestInfo] = useState();
    const[menuInfo, setMenuInfo] = useState();
    const{id} = useParams();
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async() => {
        const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        const data = await fetch(URL);
        const json = await data.json();
        console.log(json?.data?.cards);
        setMenuInfo(json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        
        // const{name, cuisines, costForTwoMessage, locality} = ;
        setRestInfo(json?.data?.cards[0]?.card?.card?.info);
    }



    return(
    <>
        {restInfo ?         
            <div className="container">
                <h1>{restInfo.name}</h1>
                <p>{restInfo.cuisines} - {restInfo.costForTwoMessage}</p>
                <p>Location : {restInfo.locality}</p>
                <>
                    {menuInfo && 
                    menuInfo.map((item, index) => 
                            {
                                const data = item?.card?.info;
                                console.log(data);
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