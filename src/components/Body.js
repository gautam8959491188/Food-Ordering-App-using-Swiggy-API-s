import { restaurantList } from "./constants.js";
import  RestaurantCard  from "./RestaurantCard.js";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";
import { filterData } from "../utils/heplper.js";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    const {user, setUser} = useContext(UserContext);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
       getRestaurant();
    },[]);

    
    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        //alert(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //if (!allRestaurants.length) return null;
    //if(filteredRestaurants.length === 0)return <h1>No restaurant found</h1>

    const isOnline = useOnline();
    if(!isOnline) return <h1>🔴 Check your internet connection</h1>




    return (allRestaurants?.length === 0)? (<Shimmer />):  (
        
        <>
        
        <div className=" bg-orange-50 m-2 shadow-lg">
             
            <input type="text" 
            data-testid="search-input"
            className="p-5 m-2 focus:bg-green-50" 
            placeholder="Search" 
            value={searchText}
            onChange={(e)=> {
              setSearchText(e.target.value);
             
             if (e.target.value === "")
                {
                    getRestaurant()
                }
            }}/>
         <button 
         data-testid="search-btn"
         className="m-2 p-2 bg-orange-200 border-collapse rounded-lg hover:bg-orange-500"
         onClick={(e) => {
           
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          
         }} >Search</button> 
         <input value={user.name} onChange={(e)=>setUser({
            ...user,
            name: e.target.value,
         })}></input>
         <input value={user.email} onChange={(e)=>setUser({
            ...user,
            email: e.target.value,
         })}></input>
        </div>
        
        
     <div className="flex flex-wrap" data-testid="res-list">
     {
        filteredRestaurants.map((restaurant)=>{
            return(
                <Link to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard {...restaurant.info} />
            </Link>
            );
        })
     }
    
    </div>
    </>
    );
};

export default Body; 