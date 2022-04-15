import { useEffect, useReducer, useState } from 'react';
import { projectFirestore } from '../firebase/config';

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {

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

    // add a document
    const addDocument = (doc) => {

    }

    // delete a document
    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }

}