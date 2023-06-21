import { create } from 'zustand';

// Définition de l'interface pour le magasin Zustand.
// Il contient une propriété booléenne isOpen et deux méthodes pour manipuler cette propriété.
interface SearchModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// Création du magasin Zustand en utilisant la fonction `create`.
// Les méthodes `onOpen` et `onClose` sont utilisées pour modifier la valeur de `isOpen`.
const useSearchModal = create<SearchModal>((set) => ({
    isOpen: false, // on initialise la modal à false
    onOpen: () => set(() => ({ isOpen: true })), // on ouvre la modal
    onClose: () => set(() => ({ isOpen: false })), // on ferme la modal
}));

export default useSearchModal;