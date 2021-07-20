import firebase from 'firebase/app';

var firebaseConfig = {
 apiKey: "AIzaSyDkGXsGN-5ap_7V7KXHqE2nvE-Ai8I8Mx4",
 authDomain: "camada17565.firebaseapp.com",
 projectId: "camada17565",
 storageBucket: "camada17565.appspot.com",
 messagingSenderId: "257996509186",
 appId: "1:257996509186:web:8aa1de415e43261463171b"
};

export const getFirebase = () => {
 return firebaseConfig
}
export const getFirebase = () => {
 return firebase.firestore(firebaseConfig)

}