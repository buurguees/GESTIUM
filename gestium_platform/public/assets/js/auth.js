import { auth } from '../js/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuario registrado:', userCredential.user);
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
};
