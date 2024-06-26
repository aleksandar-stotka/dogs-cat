import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/firebase';
import { useAuthContext } from './useAuthContext';
export default function useSignUp() {
    const [isCancelled,setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const {dispatch} =useAuthContext()

    const signup = async (email, password, displayName) => {
        setIsPending(true);
        setError(null);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);

            if (!res) {
                throw new Error('Could not complete SignUp');
            }

            if (res.user) {
                await res.user.updateProfile({ displayName });


                dispatch({type:'LOGIN', payload:res.user})
            } else {
                throw new Error('User data not available');
            }
              if(!isCancelled) {
                setIsPending(false);
                setError(null);

              }
           
        } catch (err) {
            if (!isCancelled) {
                console.log(err);
                setError(null);
                setIsPending(false);
            } 
        }
    };
    useEffect(() => {
        return () => setIsCancelled(false)

    },[])
  

    return { signup, error, isPending };
}
