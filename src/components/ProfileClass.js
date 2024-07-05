import React from "react";

class Profile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        };
    }
    componentDidMount(){
        console.log("Componentdid mount")
    }
    render(){
        const {count} = this.state;
    return(
        <div>
        <h1>This Profile is class based component....</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {count}</h3>
        <button onClick={()=>{
            //we cannot mutate the count directly so we need to pass it as an object.
            // Never do this.setState = something
            this.setState({
                count: 1,
            })
        }}>setCount</button>
        </div>
    )
   
}
    
}

export default Profile;