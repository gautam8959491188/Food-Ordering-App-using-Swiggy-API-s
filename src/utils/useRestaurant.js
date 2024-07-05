 import { useState, useEffect } from "react";
 import { FETCH_MENUE_URL } from "../components/constants";
 
 const useRestaurant = (id) => {
  
   const [restaurants, setRestaurants] = useState(null);
   useEffect(()=>{
        getRestaurantInfo();
    },[]);
    
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENUE_URL + id);
        const json = await data.json()
        setRestaurants(json?.data?.cards[2]?.card?.card?.info)
        //alert(json?.data?.cards[5])
        //alert("Menue :" + json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name)
        
    }
    return restaurants;

 }

 export default useRestaurant;