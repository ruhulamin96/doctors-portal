import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile , getIdToken
} from "firebase/auth";
import initializeFirebase from "../Login/firebase/firebase.init";
import axios from 'axios'
initializeFirebase();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError]=useState("");
  const [isAdmin, setIsAdmin]=useState(false);
  const [token, setToken]=useState();

  ///register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        // ...
        setAuthError("");
        saveUser(email,name)
        const newUser={email,displayName:name}
        updateProfile(auth.currentUser, {
          displayName: name
        }).then((result) => {
            setUser(result.user)
            
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.push('/');
      })

      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));
  };
  ///observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
        getIdToken(user)
        .then(result=>setToken(result))
      
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  ///login
  const logIn = (email, password, location,history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination=location.state?.from || '/'
        history.replace(destination)
        // history.goBack();
        setAuthError("");
        const user = userCredential.user;
        // console.log(user)
        // ...
      })
      .catch((error) => {
        setAuthError(error.message)
       
      })
      .finally(() => setIsLoading(false));
  };
  //logOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));
  };
  ///google sign in
  const googleLogIn=(location, history)=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user=result.user;
     const destination= location.state?.from || '/'
   history.replace(destination);
    setAuthError("");
    googleSaveUser(user.email, user.displayName)
  }).catch((error) => {
    setAuthError(error.message)
  });
  }
  const saveUser=(email, displayName)=>{
    const users={email, displayName}
   axios.post('https://intense-reef-07418.herokuapp.com/users',users)
  }
  const googleSaveUser=(email, displayName)=>{
    const users={email, displayName}
   axios.put('https://intense-reef-07418.herokuapp.com/users',users)
  }
  //is admin
  useEffect(()=>{
    axios.get(`https://intense-reef-07418.herokuapp.com/users/${user.email}`)
    .then(result=>setIsAdmin(result.data.admin))
  },[user.email])

  return {
    user,
    registerUser,
    logOut,
    logIn,
    isLoading,
    authError,googleLogIn,isAdmin,token
  };
};
export default useFirebase;
