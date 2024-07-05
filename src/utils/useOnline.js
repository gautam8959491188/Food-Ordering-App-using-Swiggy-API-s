import { useState, useEffect } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{

        const handelOnline = ()=>{
            setIsOnline(true);
        }
    
        const handelOffine = ()=>{
            setIsOnline(false);
        }

        window.addEventListener("online", handelOnline);
        window.addEventListener("offline", handelOffine);

        return () => {
            window.removeEventListener("online", handelOnline);
            window.removeEventListener("offline", handelOffine);
        }


    },[])
    

    return isOnline;
}

export default useOnline