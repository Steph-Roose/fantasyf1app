import { useEffect, useState } from 'react';
import { projectFirestore } from '../../config/configfirebase';

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        const unsub = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            });

            setDocuments(results);
            setError(null);

        }, (err) => {
            console.log(err);
            setError('Could not fetch data');
        });

        return () => unsub();

    }, [collection])

    return { documents, error }
}