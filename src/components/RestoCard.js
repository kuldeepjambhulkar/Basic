import { RestoImage } from "../utils/common";
import { Link } from "react-router-dom";
const RestoCard = (props) => {
    return(
        <div className="resto-card w-60 m-4 border-2 p-3">
            <img src={RestoImage} alt="" className="resto-card-img"/>
            <h2 className="font-bold mb-2"><Link to={"restomenu/"+props.id}>{props.name}</Link></h2>
            <h3>{props.cuisine}</h3>
            <h3 className="font-bold">{props.rating}</h3>
            <h3>{props.eta}</h3>
        </div>
    )
}
export default RestoCard;