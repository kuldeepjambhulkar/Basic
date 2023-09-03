import User from "./User"
import UserClass from "./UserClass"

export default About = () => {
    return(
        <div className="container">
            <h1>About Us</h1>
            <h2>Meet our team</h2>
            <User name={"John"} location={"Pune"}/>
            <UserClass name={"Monica"} location={"Mumbai"}/>
        </div>
    )
}