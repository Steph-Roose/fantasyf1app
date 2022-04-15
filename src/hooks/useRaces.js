import axios from 'axios';
import {useState} from 'react';

export const useRaces = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const getRaces = async () => {
        // reset error every time the user logs out
        setError(null);
        // start to request to log the user out
        setIsPending(true);

        try {
            const res = await axios.get(``)

        } catch (e) {
            if (!isCancelled) {
                console.log(e.message);
                setError(e.message);
                setIsPending(false);
            }
        }
    }
}