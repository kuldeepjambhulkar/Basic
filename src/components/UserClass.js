import React from "react";

export default class UserClass extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return<>
        <div className="user">
            <h2>{this.props.name}</h2>
            <h2>{this.props.location}</h2>
        </div>
    </>
    }
}