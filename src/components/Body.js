import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {

    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFiltered, setIsFiltered] = useState(false);
    const[searchText, setSearchText] = useState("");
    const isOnline = useOnlineStatus();
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/api/seo/getListing?lat=19.2133035606211&lng=72.87611371920241');
        const json = await data.json();
        
        setRestList(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestList(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setIsLoading(false);
    }
    if (!isOnline) {
        return(<>
            <h1>Check your interent connection</h1>
        </>)
    }
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="searchDiv flex justify-center">
                    <input 
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value)
                            setFilteredRestList(restList.filter(resto => resto.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())));

                            if (!e.target.value) {
                                setFilteredRestList(restList);
                            }
                        }}
                    /> <br />
                    <button
                        className={isFiltered ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                        onClick={() => {
                            if(!isFiltered) {
                                const filteredList = restList?.filter(res => res.info.avgRating > 4.3);
                                setFilteredRestList(filteredList);
                            } else {
                                setFilteredRestList(restList);
                            }
                            setIsFiltered(!isFiltered);
                        }}
                    >{isFiltered ? 'Reset' : 'Top rated restos'}</button>
                </div>
            </div>
            {isLoading ? <div>
                <ShimmerUI/>
            </div> :
            <div className="container restoSection mx-auto">
                <h2>Restos</h2>
                <div className="resto-Cards flex flex-wrap justify-center items-center">
                    {filteredRestList && filteredRestList.map((resto, index) => {
                        return <RestoCard
                            key = {index}
                            id={resto.info.id}
                            name = {resto.info.name}
                            cuisine = {resto.info.cuisines?.join(', ')}
                            rating = {resto.info.avgRating}
                        />
                    })}
                </div>
            </div>
            }
        </>
    )
}

export default Body;