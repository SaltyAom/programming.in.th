import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBcAEoDKxjVCLp6JzVu2yAOksxVrOA74YU',
  authDomain: 'proginth.firebaseapp.com',
  databaseURL: 'https://proginth.firebaseio.com',
  projectId: 'proginth',
  storageBucket: 'proginth.appspot.com',
  messagingSenderId: '345170514263',
  appId: '1:345170514263:web:b60cd3d015e4b4d464ee12',
  measurementId: 'G-9KZEYQ24KD',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.app().functions('asia-east2')
}

export default firebase
