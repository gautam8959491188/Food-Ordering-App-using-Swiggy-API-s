import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "./constants"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"
import { FETCH_MENUE_URL } from "./constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const RestaurantMenu = ()=>{
    const {id} = useParams()
    const Restaurant = useRestaurant(id)
   
   const [menu, setMenu] = useState([]);
   //setMenu(Restaurant.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0])
   const dispatch = useDispatch();
  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  console.log(item);
        }   
    

   useEffect(()=>{
        getRestaurantInfo();
    },[]);
    
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENUE_URL + id);
        const json = await data.json()
        setMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards)
        }

    if (!Restaurant) return(
        <Shimmer />    
    )
    
    return (
       <>
        <div className="flex-wrap-reverse">
            <h1>Restaurant Id: {id}</h1>
            <h2 className="bold ">{Restaurant.name}</h2>
            <img src={IMG_CDN_URL + Restaurant.cloudinaryImageId}/>
            <h3>{Restaurant.areaName}</h3>
            <h3>{Restaurant.city}</h3>
            <h3>{Restaurant.cuisines.join(", ")}</h3>
            <h3>{Restaurant.avgRating} Stars</h3><br />
        </div>
       
         <div className>
        
      
        
            <h1 className="font-bold text-2xl py-2" >Menu: </h1>
            <ul data-testid="menu">
            {menu.map(item => <li>{item.card.info.name} - <button data-testid="addBtn" className="p-2 m-1 bg-green-100" onClick={()=>addFoodItem(item.card.info)}>Add</button></li>) }
       
         </ul>
    
        
            
            
        </div>
        </>
    )

}
export default RestaurantMenu;