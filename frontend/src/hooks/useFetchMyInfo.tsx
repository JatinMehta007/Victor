import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface MyInfo {
    id :string,
    name:string,
    username:string
}
export const useFetchMyInfo =() =>{
    const [myInfo, setMyInfo] = useState<MyInfo>();
    useEffect( () => {
        const token = localStorage.getItem("token") || "{}";

        axios.get(`${BACKEND_URL}/api/v1/blog/mydata`,{
            headers:{
                Authorization: token 
            }
        })
        .then((response) =>{
            setMyInfo(response.data.myInfo);
        })
        .catch((error)=>{
            console.log(`Error while fetching myInfo`, error);
        })
        
    },[])
    return myInfo
}