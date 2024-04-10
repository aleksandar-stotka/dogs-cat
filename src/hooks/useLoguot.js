import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/firebase"

function useLoguot() {
    const [isCancelled,setIsCancelled] = useState(false)

    const [isPending,setIsPending] = useState(false)
    const [error,setError] =useState(null)
    
    const {dispatch} =useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            await projectAuth.signOut()
            
            dispatch({type: 'LOGOUT'})
           

            if(!isCancelled) {
                setIsPending(false)
                setError(null)     
            }
           


        } catch(err) {
            if(!isCancelled) {
                console.log(err)
                setIsPending(false)
                setError(null)
            }
        }
    }
    
     useEffect(() => {
           return () => setIsCancelled(true)
     },[])

    return {logout, isPending,error}


  
}

export default useLoguot