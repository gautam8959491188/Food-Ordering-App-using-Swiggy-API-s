import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile.js"
import ProfileClass from "./ProfileClass.js"
const About = () => {
    return (
        <>
        <h1>About Us....</h1>
        <p>This is the food ordering App 🚀..............</p>
        <ProfileFunctionComponent name={"Gautam"}/>
        <ProfileClass name={"Gautam from CC"}/>
        </>
    )

}

export default About;