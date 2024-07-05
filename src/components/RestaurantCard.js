import UserContext from "../utils/UserContext";
import { IMG_CDN_URL } from "./constants";
import { useContext } from "react";

const RestaurantCard = ({locality, name, cuisines, avgRating,cloudinaryImageId}) => {
 const {user} = useContext(UserContext)
    //const {image, name, cuisines, rating} = restaurant.data;
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-orange-50 flex">
        <img src= {IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{locality}</h4>
        
        <h4>{avgRating} Star</h4>
        
        
        {<h3 id="cuisines">{cuisines.join(", ")}</h3>}
       
        
        </div>
    );       
    
};

export default RestaurantCard;