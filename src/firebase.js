import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
