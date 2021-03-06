import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

import config from 'servicesConfig.mjs';

if (!firebase.apps.length) {
	firebase.initializeApp(config.firebase);
}

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
