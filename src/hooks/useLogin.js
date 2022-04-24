import { useEffect, useState } from 'react';
import { projectAuth } from '../api/configfirebase';
import { useAuthContext } from './useAuthContext';


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        // reset error every time the user logs in
        setError(null);
        // start to request to log the user in
        setIsPending(true);

        // log the user in
        try {
            // login
            const res = await projectAuth.signInWithEmailAndPassword(email, password);

            // dispatch login action (context)
            dispatch({ type: 'LOGIN', payload: res.user })

            // update state
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        } catch (e) {
            if (!isCancelled) {
                setError(e.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { login, error, isPending }
}