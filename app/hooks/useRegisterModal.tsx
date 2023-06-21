import { create } from 'zustand';

interface RegisterModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalState>((set) => ({
    isOpen: false, // on initialise la modal à false
    onOpen: () => set(() => ({ isOpen: true })), // on ouvre la modal
    onClose: () => set(() => ({ isOpen: false })), // on ferme la modal
}));

export default useRegisterModal;