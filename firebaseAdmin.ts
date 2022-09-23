import admin from "firebase-admin";
const serviceAccount = require("./secrets.json");

export const verifyIdToken = (token: any) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://fir-react-auth-edc0b.firebaseio.com",
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
