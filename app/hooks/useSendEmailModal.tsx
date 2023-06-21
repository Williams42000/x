import { create } from 'zustand';

interface SendEmailModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSendEmailModal = create<SendEmailModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false })),
}));

export default useSendEmailModal;
