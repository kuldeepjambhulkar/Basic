import React from "react";

export default class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }



    render(){
        const{name, location} = this.props;
        const{count} = this.state;
        return<>
        <div className="user">
            <p>{count}</p>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Count++</button>
            <h2>{name}</h2>
            <h2>{location}</h2>
        </div>
    </>
    }
}