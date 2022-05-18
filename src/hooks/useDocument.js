import {projectFirestore} from '../config/configfirebase';
import {useEffect, useState} from 'react';

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    // realtime data for document
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id);

        const unsubscribe = ref.onSnapshot((snapshot) => {
            setDocument({...snapshot.data(), id: snapshot.id});
            setError(null);
        }, (err) => {
            console.log(err.message);
            setError('Failed to get document.');
        })

        return () => unsubscribe();

    }, [collection, id])

    return { document, error }
}