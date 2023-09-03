import { useState } from "react"

export default User = (props) => {
    const[count, setCount] = useState(0);

    return<>
        <div className="user">
            <p>{count}</p>
            <h2>{props.name}</h2>
            <h2>{props.location}</h2>
        </div>
    </>
}