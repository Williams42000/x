import { create } from 'zustand';

// Définition de l'interface pour le magasin Zustand.
// Il contient une propriété booléenne isOpen et deux méthodes pour manipuler cette propriété.
interface RentModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// Création du magasin Zustand en utilisant la fonction `create`.
// Les méthodes `onOpen` et `onClose` sont utilisées pour modifier la valeur de `isOpen`.
const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false, // on initialise la modal à false
    onOpen: () => set(() => ({ isOpen: true })), // on ouvre la modal
    onClose: () => set(() => ({ isOpen: false })), // on ferme la modal
}));

export default useRentModal;

// RESUMER:
// En résumé, ce code est un magasin d'état Zustand qui gère l'état ouvert/fermé d'une modale de location. 
// Il exporte un hook personnalisé (useRentModal) que vous pouvez utiliser dans vos composants React pour accéder et modifier l'état de la modale. 
// Les méthodes onOpen et onClose sont utilisées pour ouvrir et fermer la modale respectivement.