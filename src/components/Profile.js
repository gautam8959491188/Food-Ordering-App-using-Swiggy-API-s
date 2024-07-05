import { useState } from "react";

const Profile = (props)=>{
const [count, setCount] = useState(0)
return(
<div>
<h1>This is profile section....</h1>
<h2>Name: {props.name}</h2>
<h3>Count: {count}</h3>
<button onClick={()=>{
    setCount(1);
}}>setCount</button>
</div>


)

}

export default Profile;