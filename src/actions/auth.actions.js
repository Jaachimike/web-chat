
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const signup = (user) => {

  return (dispatch) => {

    const db = getFirestore();
    getAuth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })

  }



}