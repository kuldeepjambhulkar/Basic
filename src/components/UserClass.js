import React from "react";

export default class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name: "",
                location: ""
            }  
        }
        // console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/dan');
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render(){
        // console.log(this.props.name + "Child Render")
        const{name, location, avatar_url} = this.state.userInfo;
        return<>
        <div className="user">
            <img src={avatar_url} alt="" />
            <h2>{name}</h2>
            <h2>{location}</h2>
        </div>
    </>
    }
}