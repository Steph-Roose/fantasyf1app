import {useAuthContext} from './useAuthContext';
import {useEffect, useState} from 'react';
import {projectAuth} from '../../config/configfirebase';

export const useUpdateUser = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const updateLoginDetails = async (newEmail, newPassword, newDisplayName) => {
        setError(null);
        setIsPending(true);

        try {
            if (newEmail) {
                await projectAuth.currentUser.updateEmail(newEmail);
            } else if (newPassword) {
                await projectAuth.currentUser.updatePassword(newPassword);
            } else if (newDisplayName) {
                await projectAuth.currentUser.updateProfile({ displayName: newDisplayName })
            }

            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    const deleteUser = async () => {
        setError(null);
        setIsPending(true);

        try {
            await projectAuth.currentUser.delete;

            dispatch({ type: 'LOGOUT' });

            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, updateLoginDetails, deleteUser }
}