import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBqZ70flUafrdmicitDpW48Ri-bg6BBwRI',
  authDomain: 'rn-todoapp-c7603.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'rn-todoapp-c7603',
  storageBucket: 'rn-todoapp-c7603.appspot.com',
  messagingSenderId: '119039963781',
  appId: '1:119039963781:android:390bab7987566aefedefec',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
