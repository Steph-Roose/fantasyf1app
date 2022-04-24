import { useEffect, useState } from 'react';
import { projectAuth } from '../api/configfirebase';
import { useAuthContext } from './useAuthContext';


export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        // reset error every time the user logs out
        setError(null);
        // start to request to log the user out
        setIsPending(true);

        // log the user out
        try {
            await projectAuth.signOut();

            // dispatch logout action (context)
            dispatch({ type: 'LOGOUT' })

            // update state
            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }

        } catch (e) {
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

    return { logout, error, isPending }
}