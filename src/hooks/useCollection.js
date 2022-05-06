import { useEffect, useState } from 'react';
import { projectFirestore } from '../config/configfirebase';

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })

            // update state
            setDocuments(results);
            setError(null);
        }, (error) => {
            console.log(error);
            setError('Could not fetch data')
        });

        // unsubscribe on unmount
        return () => unsubscribe();

    }, [collection])

    return { documents, error }
}