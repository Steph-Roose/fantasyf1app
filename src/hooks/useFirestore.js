import { useEffect, useReducer, useState } from 'react';
import { projectFirestore, timestamp } from '../config/configfirebase';

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false, error: null}
        case 'ADDED_DOC':
            return { isPending: false, document: action.payload, success: true, error: null}
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: action.payload}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    // "response" instead of "state" now because it semi-represents the data that we get back from Firestore.
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // collection reference
    const ref = projectFirestore.collection(collection);

    // only dispatch if the page isn't unmounted
    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled) {
            dispatch(action);
        }
    }

    // add a document
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' });

        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({ ...doc, createdAt });
            dispatchIfNotCancelled({ type: 'ADDED_DOC', payload: addedDocument });
        }
        catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
        }
    }

    // delete a document
    const deleteDocument = async (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { addDocument, deleteDocument, response }

}