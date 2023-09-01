import { useRouteError } from "react-router-dom"

export default ErrorEle = () => {
    const errDetails = useRouteError();
    return(
        <div className="container">
            <h1>Something went wrong...</h1>
            <p>{errDetails.status} {errDetails.statusText}</p>
        </div>
    )
}