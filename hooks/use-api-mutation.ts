import { useState } from "react";
import { useMutation } from "convex/react";

// This hook runs an API call while tracking if it's loading (pending) and handles errors cleanly.

export const useApiMutation =(mutationFunction: any) =>{
    const [pending,setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction)

    const mutate = (payload :any) =>{
        setPending(true);

        return apiMutation(payload)
        .finally(()=>{setPending(false)})
        .then((result)=>{return result})
        .catch((error)=>{throw error})
    };

    return{
        mutate,
        pending 
    }

}