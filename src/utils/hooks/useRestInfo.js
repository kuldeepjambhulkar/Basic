import { useEffect, useState } from "react";

export default useRestInfo = (id) => {
    const[restInfo, setRestInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setRestInfo(json);
    }
    return restInfo;
}
