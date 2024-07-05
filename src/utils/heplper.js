export function filterData(searchText, allRestaurants){
  
    return allRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
    }