import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
const Body = () => {

    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFiltered, setIsFiltered] = useState(false);
    const[searchText, setSearchText] = useState("");

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

    return (
        <>
            <div className="container">
                <div className="searchDiv">

                    <input 
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
            <div className="container restoSection">
                <h2>Restos</h2>
                <div className="resto-Cards">
                    {filteredRestList && filteredRestList.map((resto, index) => {
                        return <RestoCard
                            key = {index}
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