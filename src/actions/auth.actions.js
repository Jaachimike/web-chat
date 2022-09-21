
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const signup = (user) => {

  return async (dispatch) => {

    const db = getFirestore();
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, user.email, user.password)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })

  }



}