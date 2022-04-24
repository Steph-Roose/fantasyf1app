import { useEffect, useState } from 'react';
import { projectAuth } from '../api/configfirebase';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        // reset error every time the user signs up
        setError(null);
        // start to request to sign the user up
        setIsPending(true);

        try {
            // first signup user (gives a response back)
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            if (!res) {
                throw new Error('Could not complete signup')
            }

            // then update profile with username
            await res.user.updateProfile({ displayName })

            // dispatch login action (context)
            dispatch({ type: 'LOGIN', payload: res.user })

            // update state
            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }


        } catch(e) {
            if (!isCancelled) {
                console.log(e.message);
                setError(e.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signup }
}