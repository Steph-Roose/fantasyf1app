import { useEffect, useState } from 'react';
import { projectAuth } from '../../config/configfirebase';
import { useAuthContext } from './useAuthContext';

export const useUpdateUser = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { user } = useAuthContext();

    const updateLoginDetails = async (newEmail, newPassword) => {
        setError(null);
        setIsPending(true);

        try {
            if (newEmail !== user.email) {
                await projectAuth.currentUser.updateEmail(newEmail);
            } else if (newPassword !== user.password) {
                await projectAuth.currentUser.updatePassword(newPassword);
            }

            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }
        } catch (err) {
            if (!isCancelled) {
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, updateLoginDetails }
}