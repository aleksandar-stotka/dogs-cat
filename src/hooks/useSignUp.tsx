import { useState } from 'react';
import { projectAuth } from '../firebase/firebase';
import { useAuthContext } from './useAuthContext';
interface SignUpResult {
    signup: (email: string, password: string, displayName: string) => Promise<void>;
    error: string | null;
    isPending: boolean;
}

export default function useSignUp(): SignUpResult {
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
            
            setIsPending(false);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            } else {
                console.error('Error object is not an instance of Error:', err);
                setError('An unknown error occurred.');
                setIsPending(false);
            }
        }
    };

    return { signup, error, isPending };
}
