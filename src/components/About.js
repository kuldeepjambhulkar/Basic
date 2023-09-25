// import User from "./User"
import UserClass from "./UserClass"
import React from "react"

export default class About extends React.Component {

    // Refer for component lifecycle : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent did mount");
    }

    render(){
        console.log("Parent Render");
        return(<div className="container">
            <h1>About Us</h1>
            <h2>Meet our team</h2>
            {/* <User name={"John"} location={"Pune"}/> */}
            <UserClass name={"Monica"} location={"Mumbai"}/>
        </div>)
    }
}