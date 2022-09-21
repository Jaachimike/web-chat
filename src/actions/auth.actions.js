
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const signup = (user) => {

  return async (dispatch) => {

    const db = getFirestore();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(data => {
      console.log(data);
      const currentUser = auth.currentUser
      const name = `${user.firstName} ${user.lastName}`
      updateProfile(auth.currentUser, {
        displayName: name
      })
      .then(() => {
        //if you are here means it is updated successfully
        db.collection("users").add({
          firstName: user.firstName,
          lastName: user.lastName,
          uid: data.user.uid,
          createdAt: new Date()
        })
        .then(() => {
          //successful
          const loggedInUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            uid: data.user.uid,
            email: user.email,
          } 
          localStorage.setItem('user'. JSON.stringify(loggedInUser));
          console.log('User Logged in successfully...!');
        })
        .catch(error => {
          console.log(error);
        });
      });
    })
    .catch(error => {
      console.log(error);
    })

  }



}