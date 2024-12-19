// Import
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Initialisation Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTbdhLKShJdP2jt0N4CXLQi4FFYAUhVBU",
    authDomain: "anglais-b795d.firebaseapp.com",
    projectId: "anglais-b795d",
    storageBucket: "anglais-b795d.firebasestorage.app",
    messagingSenderId: "1098002574623",
    appId: "1:1098002574623:web:a2e4f24f2229b98c27d42a",
    measurementId: "G-0S5V2DBZ6X"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const RespRef = collection(db, 'resp');

let selectedButtonValue = ''; // Variable pour stocker la valeur du bouton cliqué

// Gestionnaire de clics sur les boutons
document.querySelectorAll('form.btncont article button').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        selectedButtonValue = e.target.textContent; // Stocke la valeur du bouton cliqué
    });
});

// Écoute de l'événement de soumission du formulaire
document.querySelector('form.btncont').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère les données des champs
    const responseText = document.querySelector('.text').value.trim();

    // Ajout à la base de données
    try {
        await addDoc(RespRef, {
            buttonResponse: selectedButtonValue || 'No button clicked', // Valeur du bouton cliqué
            textResponse: responseText || 'No response provided', // Texte saisi
            timestamp: new Date() // Enregistre un horodatage
        });
        window.location.href = 'done.html';
    } catch (error) {
        console.error('Erreur lors de l\'ajout à la base de données : ', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
});
