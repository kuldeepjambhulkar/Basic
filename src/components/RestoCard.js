import { RestoImage } from "../utils/common";
import { Link } from "react-router-dom";
const RestoCard = (props) => {
    return(
        <div className="resto-card">
            <img src={RestoImage} alt="" className="resto-card-img"/>
            <h2><Link to={"restomenu/"+props.id}>{props.name}</Link></h2>
            <h3>{props.cuisine}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.eta}</h3>
        </div>
    )
}
export default RestoCard;