import { auth } from "./firebase";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Function to create a new user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

// Function to sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error signing in: ", error);
    throw error;
  }
};

// Function to sign in with Google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Add user to Firestore (example code, update as needed)
    // await addUserToFirestore(user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    throw error;
  }
};

// Function to sign out
export const doSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};

// Function to send a password reset email
export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Error sending password reset email: ", error);
    throw error;
  }
};

// Function to change the password
export const doPasswordChange = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    console.error("Error changing password: ", error);
    throw error;
  }
};

// Function to send an email verification
export const doSendEmailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } catch (error) {
    console.error("Error sending email verification: ", error);
    throw error;
  }
};

// Optional: Export the auth module if needed elsewhere
export { auth };
