import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/firebase"

function useLoguot() {
    const [isPending,setIsPending] = useState<boolean>(false)
    const [error,setError] =useState<string | null>(null)
    
    const {dispatch} =useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(false)

        try {
            await projectAuth.signOut()
            
            dispatch({type: 'LOGOUT'})

            setIsPending(false)
            setError(null)


        } catch(err) {
            if(err) {
                console.log(err)
                setIsPending(false)
            }
        }
    }


    return {logout, isPending,error}


  
}

export default useLoguot