/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/services";

export const useFetchRecipientUser = (chat,user) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    const recipientId = chat?.members.find((id)=> id !== user?._id);

    useEffect(()=>{
        const getUser = async()=>{
            if(!recipientId) return null;
            const response = await fetch(`${baseUrl}/users/find/${recipientId}`);
            const data = await response.json();
            if(response.error){
                return setError(error);
            }
            setRecipientUser(data);
        };
        getUser();
    },[recipientId])
    return { recipientUser};
}