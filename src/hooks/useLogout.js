import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';


export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        // reset error every time the user signs up
        setError(null);
        // start to request to sign the user up
        setIsPending(true);

        // sign the user out
        try {
            await projectAuth.signOut();

            // dispatch logout action (context)
            dispatch({ type: 'LOGOUT' })

            setError(null);
            setIsPending(false);

        } catch (e) {
            console.log(e.message);
            setError(e.message);
            setIsPending(false);
        }
    }

    return { logout, error, isPending }
}