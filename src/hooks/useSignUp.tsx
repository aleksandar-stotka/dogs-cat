import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/firebase';
import { useAuthContext } from './useAuthContext';
import { SignUpResult } from '../types/Types';
export default function useSignUp(): SignUpResult {
    const [isCancelled,setIsCancelled] = useState<boolean>(false)
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {dispatch} =useAuthContext()

    const signup = async (email: string, password: string, displayName: string): Promise<void> => {
        setIsPending(true);
        setError(null);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);

            if (!res) {
                throw new Error('Could not complete SignUp');
            }

            if (res.user) {
                await res.user.updateProfile({ displayName } as { displayName: string });


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
