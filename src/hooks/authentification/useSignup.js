import { useEffect, useState } from 'react';
import { projectAuth, projectFirestore } from '../../config/configfirebase';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            await res.user.updateProfile({ displayName });

            await projectFirestore.collection('users').doc(res.user.uid).set({ displayName, userTeam: null, points: 0 })

            dispatch({ type: 'LOGIN', payload: res.user });

            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }

        } catch(err) {
            if (!isCancelled) {
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, signup }
}