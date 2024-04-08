// this hook do 2 thinks , add document to firestore collection or remove document from firestore collection
// right now we focusing to add new document , want to add docoment when user submit create form
//late rwe also use this hook to delete dociment for collection

import { useReducer, useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/firebase"; ///use this everytime if we want interact whith projectFirestore
import { initialState } from "./initialState";

const firestoreReducer = (state, action) => {///action is type of dispatch that i created, when create action specify a type and than its inside of this reducer
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null }   //current property on state, take all of initial state and add to this object, and add any individual property that we want to change
    //all other property is same (spread operator ...state) just isPending its true
    case "ADDED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true, error: null }

    case "ERROR":
      return { isPending: false, document: null, success: false, error: action.payload }
    default:
      return state
  }

}
export const useFirestore = (collection) => {
  ///this will be collection we want to work with

  //// this response represent back on firestore when i want do some request, our custom state object, dispatch is reducer when i want dispatch new action

  const [response, dispatch] = useReducer(firestoreReducer, initialState)    //first argument reducer function that i use, an second any initial state
  // gona update later on in firestoreReducer

  const [isCancelled, setIsCancelled] = useState(false) //use that for cleanup function and use that and set this true when component use hook for mounts


  const ref = projectFirestore.collection(collection)  //late use ref.add to delete document add document
  // add document

  // only dispatch if !isCancelledconst
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }


  const addDocument = async (doc) => {
    //inside this function passing documenti want to add, that document it jus be object, for example in create 
    dispatch({ type: "IS_PENDING" })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({ ...doc, createdAt })  //represent object document i want to save, to check if the isCanceled it false 

      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })





    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })


    }


  }

  // delete document

  const deleteDocoment = async (id) => {

  }
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocoment, response }
};

