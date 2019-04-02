import firebase from './firebase';

export const getAuth = () => {
  return firebase.auth();
};

export const googleOAuth = () => {
  return new firebase.firebase_.auth.GoogleAuthProvider();
};
