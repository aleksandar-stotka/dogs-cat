import { projectAuth } from '../firebase/firebase'
import { useAuthContext } from './useAuthContext'
import { useState,useEffect } from 'react'


function useLogin() {
   
    const [isPending,setIsPending] = useState<boolean>(false)
    const [error,setError] =useState<string | null>(null)
    const [isCancelled,setIsCancelled] = useState<boolean>(false)
    
    const {dispatch} =useAuthContext()

    const login = async (email:string,password:string) => {
        setError(null)
        setIsPending(true)

        try {
           const res = await projectAuth.signInWithEmailAndPassword(email,password)
            
            dispatch({type: 'LOGIN', payload:res.user})
           

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
    return () => setIsCancelled(false)

   },[])
 return {login,error,isPending}

 
}

export default useLogin