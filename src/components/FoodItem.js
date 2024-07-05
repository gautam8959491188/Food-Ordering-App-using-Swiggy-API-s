import { IMG_CDN_URL } from "./constants";
const FoodItem = ({name, imageId, price, description}) => {
return(
    <div className="w-56 p-2 m-2 bg-orange-50">
        <img src= {IMG_CDN_URL + imageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{description}</h4>
        <h4>Rupees: <b>{price/100}</b></h4>
        
        
        
        
        
        </div>

)
}

export default FoodItem;